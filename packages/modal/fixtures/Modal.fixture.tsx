import React, { FC, RefObject, useContext, useEffect, useRef } from 'react';

import { components, Modal } from '../src';
import { GlobalModalConsumer, GlobalModalContext } from '../src/Global';
import {
  ModalListEntity,
  ModalRefType,
} from '../src/Global/GlobalModalProvider';

const TestAutoGlobalModalHook: FC = () => {
  const modal = useContext(GlobalModalContext);
  useEffect(() => {
    modal.create(
      'test-2',
      { size: 'small', defaultVisible: true },
      ({ Modal: M, methods, ref, id }) => (
        <>
          <M.Title>TestAutoGlobalModalHook </M.Title>
          <M.Content>
            Пример контента
            <h1>Заголовок</h1>
          </M.Content>
          <M.Footer>
            <button onClick={() => ref.current.close()}>Закрыть</button>
            <button onClick={() => methods.remove(id)}>Удалить</button>
          </M.Footer>
        </>
      ),
    );
  }, []);
  return null;
};

const TestManualGlobalModalHook: FC = () => {
  const modal = useContext(GlobalModalContext);
  useEffect(() => {
    const modalInstance = modal.create(
      'test-1',
      { size: 'small' },
      ({ Modal: M, methods, ref, id }) => (
        <>
          <M.Title>TestManualGlobalModalHook</M.Title>
          <M.Content>
            Пример контента
            <h1>Заголовок</h1>
          </M.Content>
          <M.Footer>
            <button onClick={() => ref.current.close()}>Закрыть</button>
            <button onClick={() => methods.remove(id)}>Удалить</button>
          </M.Footer>
        </>
      ),
    );
    setTimeout(() => {
      if (modalInstance && modalInstance.ref.current) {
        modalInstance.ref.current.open();
      }
    }, 0);
  }, []);
  return null;
};

const TestTriggerGlobalModalConsumer: FC = () => (
  <GlobalModalConsumer>
    {(modal) => {
      let modalInstance;
      setTimeout(() => {
        modalInstance = modal.create(
          'test-4',
          { size: 'small' },
          ({ Modal: M, methods, ref, id }) => (
            <>
              <M.Title>TestTriggerGlobalModalConsumer</M.Title>
              <M.Content>
                Пример контента
                <h2>Заголовок</h2>
              </M.Content>
              <M.Footer>
                <button onClick={() => ref.current.close()}>Закрыть</button>
                <button
                  onClick={() => {
                    methods.remove(id);
                  }}
                >
                  Удалить
                </button>
              </M.Footer>
            </>
          ),
        );
      }, 0);
      return (
        <button onClick={() => modalInstance.ref.current.open()}>
          Открыть TestTriggerGlobalModalConsumer
        </button>
      );
    }}
  </GlobalModalConsumer>
);

const TestTriggerGlobalModalHook: FC = () => {
  const modal = useContext(GlobalModalContext);
  const modalInstanceRef = useRef<ModalListEntity>();
  useEffect(() => {
    modalInstanceRef.current = modal.create(
      'test-3',
      { size: 'small' },
      ({ Modal: M, methods, ref, id }) => (
        <>
          <M.Title>TestTriggerGlobalModalHook</M.Title>
          <M.Content>
            Пример контента
            <h2>Заголовок</h2>
          </M.Content>
          <M.Footer>
            <button onClick={() => ref.current.close()}>Закрыть</button>
            <button
              onClick={() => {
                methods.remove(id);
              }}
            >
              Удалить
            </button>
          </M.Footer>
        </>
      ),
    );
  }, []);
  return (
    <button onClick={() => modalInstanceRef.current.ref.current.open()}>
      Открыть TestTriggerGlobalModalHook
    </button>
  );
};

const TestTriggerGlobalModalHookWithUpdate = () => {
  const modal = useContext(GlobalModalContext);
  const modalInstanceRef = useRef<ModalListEntity>();
  useEffect(() => {
    modalInstanceRef.current = modal.create(
      'test-5',
      { size: 'small' },
      ({ Modal: M, methods, ref, id, size }) => {
        console.log(size);
        return (
          <>
            <M.Title>TestTriggerGlobalModalHookWithUpdate</M.Title>
            <M.Content>
              Пример контента
              <h2>Заголовок</h2>
            </M.Content>
            <M.Footer>
              <button
                onClick={() =>
                  modal.update('test-5', {
                    size: size === 'default' ? 'small' : 'default',
                  })
                }
              >
                Обновить
              </button>
              <button onClick={() => ref.current.close()}>Закрыть</button>
              <button
                onClick={() => {
                  methods.remove(id);
                }}
              >
                Удалить
              </button>
            </M.Footer>
          </>
        );
      },
    );
  }, []);
  return (
    <button onClick={() => modalInstanceRef.current.ref.current.open()}>
      Открыть TestTriggerGlobalModalHookWithUpdate
    </button>
  );
};

export default {
  components: (
    <Modal size="small" defaultVisible closable>
      <components.Title>title</components.Title>
      <components.Subtitle>Subtitle</components.Subtitle>
      <components.Description>Description</components.Description>
      <components.Help>Help</components.Help>
      <components.Image src="https://picsum.photos/1280/720/?random" />
      <components.Content>content</components.Content>
      <components.Footer>
        <components.Trigger>
          <button>OK</button>
        </components.Trigger>
      </components.Footer>
    </Modal>
  ),
  'not-closable': (
    <Modal size="small" defaultVisible>
      <components.Title>title</components.Title>
      <components.Subtitle>Subtitle</components.Subtitle>
      <components.Description>Description</components.Description>
      <components.Help>Help</components.Help>
      <components.Image src="https://picsum.photos/1280/720/?random" />
      <components.Content>content</components.Content>
      <components.Footer>
        <components.Trigger>
          <button>OK</button>
        </components.Trigger>
      </components.Footer>
    </Modal>
  ),
  props: (
    <Modal
      size="small"
      closable
      defaultVisible
      title="Title"
      subtitle="Subtitle"
      image="https://picsum.photos/1280/720/?random"
      content="Content"
      footer={<button>OK</button>}
    />
  ),
  'default-closed': (
    <Modal
      size="small"
      closable
      trigger={<button>Open the modal</button>}
      title="Title"
      subtitle="Subtitle"
      image="https://picsum.photos/1280/720/?random"
      content="Content"
      footer={<button>OK</button>}
    />
  ),
  'size-medium': (
    <Modal
      size="medium"
      closable
      defaultVisible
      title="Title"
      subtitle="Subtitle"
      image="https://picsum.photos/1280/720/?random"
      content="Content"
      footer={<button>OK</button>}
    />
  ),
  'size-large': (
    <Modal
      size="large"
      closable
      defaultVisible
      title="Title"
      subtitle="Subtitle"
      image="https://picsum.photos/1280/720/?random"
      content="Content"
      footer={<button>OK</button>}
    />
  ),
  'custom-content': (
    <Modal size="small" closable defaultVisible>
      <h1>This is your beautiful content</h1>
    </Modal>
  ),
  'global-auto-hook': <TestAutoGlobalModalHook />,
  'global-manual-hook': <TestManualGlobalModalHook />,
  'global-trigger-consumer': <TestTriggerGlobalModalConsumer />,
  'global-trigger-hook': <TestTriggerGlobalModalHook />,
  'global-trigger-hook-update': <TestTriggerGlobalModalHookWithUpdate />,
};
