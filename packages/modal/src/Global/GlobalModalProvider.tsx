import React, {
  Component,
  createRef,
  PropsWithChildren,
  ReactNode,
  RefObject,
} from 'react';

import { ModalComponents, ModalContext } from '../common.types';
import { Modal } from '../index';
import { ModalProps } from '../Modal';
import { GlobalModal } from './GlobalModal';
import { Provider } from './GlobalModalContext';

/**
 * @callback createCb
 * @extends create
 */

/**
 * @callback updateCb
 * @extends update
 */

/**
 * @callback removeCb
 * @extends remove
 */

/**
 * @callback listCb
 * @extends list
 */

/**
 * @callback getCb
 * @extends get
 */

/**
 * @callback openCb
 * @extends open
 */

/**
 * @callback closeCb
 * @extends close
 */

/**
 * @callback listCb
 * @extends list
 */

/**
 * Список методов
 * @typedef {Object} Methods
 * @property {createCb} create - Создать модалку
 * @property {updateCb} update - Обновить модалку
 * @property {removeCb} remove - Удалить модалку
 * @property {getCb} get - Инстанс модалки
 * @property {openCb} open - Открыть модалку
 * @property {closeCb} close - Закрыть модалку
 * @property {listCb} list - Список модалок
 */

export type ModalRefType = ModalContext;
export type ContentModal =
  | ReactNode
  | string
  | ((ctx: SelfCallback & ModalProps) => ReactNode);

export interface MethodsList {
  create(
    id: string,
    props: ModalProps,
    content: ContentModal,
  ): ModalListEntity | null;
  update(
    id: string,
    props: ModalProps,
    content?: ContentModal,
  ): ModalListEntity | null;
  remove(id: string): string | null;
  get(id: string): ModalListEntity | null;
  open(id: string): string | null;
  close(id: string): string | null;
  list(): ModalsList | null;
}

/**
 * @typedef {Object} ModalListEntity
 * @property {RefObject<ModalRefType>} ref - ModalRef
 * @property {ContentModal} content - Контент модалки
 */

export interface ModalListEntity extends ModalProps {
  ref: RefObject<ModalRefType>;
  content: ContentModal;
}

/**
 * Список модалок
 * @typedef {Object} Modals
 * @property {...ModalListEntity} *
 */

export interface ModalsList {
  [key: string]: ModalListEntity;
}

/**
 * @method simple
 * @param {string} id - ID инстанса модалки
 * @returns {string} ID
 */

/**
 * Контекст модалки
 * @callback selfCallback
 * @param {string} id - ID инстанса модалки
 * @param {RefObject<ModalRefType>} ref - Reference на компонент модалки
 * @param {ModalComponents} Modal - Компонент модалки
 * @param {Methods} methods - Методы контекста глобальных модалок
 */

export interface SelfCallback {
  id: string;
  ref: RefObject<ModalRefType>;
  Modal: ModalComponents;
  methods: MethodsList;
}

export interface GlobalModalProviderImplements extends MethodsList {
  getMethods(): MethodsList;
  _getContent(id: string): ContentModal;
  _prepareContent(
    content: ContentModal,
    self: SelfCallback & ModalProps,
  ): ReactNode;
}

export class GlobalModalProvider
  extends Component
  implements GlobalModalProviderImplements
{
  modals;

  constructor(props: PropsWithChildren<Record<string, unknown>>) {
    super(props);

    this.getMethods = this.getMethods.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.get = this.get.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.list = this.list.bind(this);
    this._getContent = this._getContent.bind(this);
    this._prepareContent = this._prepareContent.bind(this);
    this.modals = createRef<GlobalModal>();
  }

  getMethods(): MethodsList {
    return {
      create: this.create,
      update: this.update,
      remove: this.remove,
      get: this.get,
      open: this.open,
      close: this.close,
      list: this.list,
    };
  }

  /**
   * Создание инстанса модалки
   * @method create
   * @param {string} id - ID инстанса модалки
   * @param {ModalProps} [props = {}] - Props для модалки
   * @param {ContentModal} content - Реакт компоненты или функция возвращающая реакт компоненты
   * @returns {ModalListEntity | null} ModalRef
   */
  create(
    id: string,
    props: ModalProps = {},
    content: ContentModal,
  ): ModalListEntity | null {
    if (!this.modals.current) return null;
    const { renderedIds, modals } = this.modals.current.state;
    if (renderedIds.includes(id)) return modals[id];
    const ref = createRef<ModalRefType>();
    const self = {
      ...props,
      id,
      ref,
      Modal: Modal.components,
      methods: this.getMethods(),
    };
    const modal = {
      ...props,
      ref,
      content: typeof content === 'function' ? content(self) : content,
    };

    this.modals.current.addModal(id, modal, content);

    return modal;
  }

  /**
   * Обновление инстанса модалки
   * @method update
   * @param {string} id - ID инстанса модалки
   * @param {ModalProps} [props = {}] - Props для модалки
   * @param {ContentModal} content - Реакт компоненты или функция возвращающая реакт компоненты
   * @returns {ModalListEntity | null} ModalRef
   */
  update(
    id: string,
    props: ModalProps = {},
    content?: ContentModal,
  ): ModalListEntity | null {
    const modal = this.get(id);
    if (!modal) return null;
    const data = Object.assign(modal, props);
    const self = {
      ...props,
      id,
      ref: modal.ref,
      Modal: Modal.components,
      methods: this.getMethods(),
    };
    if (content) {
      data.content = this._prepareContent(content, self);
    } else {
      const currentContent = this._getContent(id);
      data.content = this._prepareContent(currentContent, self);
    }

    this.modals.current?.updateModal(id, data, content);

    return modal;
  }

  /**
   * Удаление инстанса модалки
   * @method remove
   * @extends simple
   */
  remove(id: string): string | null {
    if (!this.modals.current) return null;
    const { modals } = this.modals.current.state;
    if (!modals[id]) return null;

    if (modals[id].ref.current) {
      modals[id].ref.current?.close();
    }

    this.modals.current.removeModal(id);

    return id;
  }

  /**
   * Список инстансов модалок
   * @method list
   * @returns {ModalsList | null} Список модалок
   */
  list(): ModalsList | null {
    if (!this.modals.current) return null;
    const { modals } = this.modals.current.state;
    return modals;
  }

  /**
   * Получение инстанса модалки
   * @method get
   * @param {string} id - ID инстанса модалки
   * @returns {ModalListEntity | null} - Инстанс модалки
   */
  get(id: string): ModalListEntity | null {
    if (!this.modals.current) return null;
    const { modals } = this.modals.current.state;
    return modals[id];
  }

  /**
   * Открыть модалку
   * @method open
   * @extends simple
   */
  open(id: string): string | null {
    const modal = this.get(id);
    if (!modal) return null;
    modal.ref.current?.open();
    return id;
  }

  /**
   * Закрыть модалку
   * @method open
   * @extends simple
   */
  close(id: string): string | null {
    const modal = this.get(id);
    if (!modal) return null;
    modal.ref.current?.close();
    return id;
  }

  _getContent(id: string): ContentModal {
    if (!this.modals.current) return null;
    const { contents } = this.modals.current.state;
    return contents[id];
  }

  _prepareContent(
    content: ContentModal,
    self: SelfCallback & ModalProps,
  ): ReactNode {
    return typeof content === 'function' ? content(self) : content;
  }

  render() {
    const { children } = this.props;
    const data = this.getMethods();

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      // @ts-ignore
      window.globalModals = data;
    }

    return (
      <Provider value={data}>
        {children}
        <GlobalModal ref={this.modals} />
      </Provider>
    );
  }
}
