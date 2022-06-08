import omit from 'lodash.omit';
import remove from 'lodash.remove';
import unset from 'lodash.unset';
import React, { Component, ReactNode } from 'react';

import { Modal } from '../index';
import {
  ContentModal,
  ModalListEntity,
  ModalsList,
} from './GlobalModalProvider';

export interface GlobalModalMethods {
  addModal(id: string, modal: ModalListEntity, content: ContentModal): void;
  updateModal(id: string, modal: ModalListEntity, content: ContentModal): void;
  removeModal(id: string): void;
}

interface ContentList {
  [key: string]: ContentModal;
}

interface GlobalModalState {
  renderedIds: string[];
  modals: ModalsList;
  contents: ContentList;
}

export class GlobalModal
  extends Component<Record<string, unknown>, GlobalModalState>
  implements GlobalModalMethods
{
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      renderedIds: [],
      modals: {},
      contents: {},
    };

    this.addModal = this.addModal.bind(this);
    this.removeModal = this.removeModal.bind(this);
    this.updateModal = this.updateModal.bind(this);
  }

  addModal(id: string, modal: ModalListEntity, content: ContentModal): void {
    this.setState((state) => {
      const newState = {
        renderedIds: [...state.renderedIds, id],
        modals: {
          ...state.modals,
          [id]: modal,
        },
      } as GlobalModalState;
      if (content) {
        newState.contents = {
          ...state.contents,
          [id]: content,
        };
      }
      return newState;
    });
  }

  updateModal(id: string, modal: ModalListEntity, content: ContentModal): void {
    this.setState((state) => {
      const newModals = state.modals;
      newModals[id] = modal;
      const newState = {
        modals: newModals,
      } as GlobalModalState;
      if (content) {
        const newContents = state.contents;
        newContents[id] = content;
        newState.contents = newContents;
      }
      return newState;
    });
  }

  removeModal(id: string): void {
    const { modals, contents, renderedIds } = this.state;
    const newModals = modals;
    unset(modals, id);
    const newContents = contents;
    unset(contents, id);
    const newRenderedIds = remove(renderedIds, (key) => key !== id);
    this.setState({
      renderedIds: newRenderedIds,
      modals: newModals,
      contents: newContents,
    });
  }

  render() {
    const { renderedIds, modals } = this.state;
    return (
      <>
        {Object.keys(modals).map((key) => {
          const modal = modals[key];
          const isRendered = renderedIds.find((id: string) => id === key);
          if (!isRendered) return false;
          return (
            <Modal
              key={key}
              {...omit(modal, ['content', 'ref'])}
              ref={modal.ref}
            >
              {modal.content as ReactNode}
            </Modal>
          );
        })}
      </>
    );
  }
}
