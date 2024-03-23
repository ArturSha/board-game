import type { ReactNode } from 'react';
import { memo, useCallback, useEffect } from 'react';
import cls from './Modal.module.scss';

interface ModalTypes {
  active: boolean;
  withCloseBtn?: boolean;
  setActive?: (arg: boolean) => void;
  children: ReactNode;
}

export const Modal = memo((props: ModalTypes) => {
  const { active, withCloseBtn = true, setActive, children } = props;

  const handleClose = useCallback(() => {
    setActive?.(false);
  }, [setActive]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && active) {
        handleClose();
      }
    },
    [active, handleClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      onClick={handleClose}
      className={active ? `${cls.modal} ${cls.active}` : `${cls.modal}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          active
            ? `${cls.modal__content} ${cls.active}`
            : `${cls.modal__content}`
        }
      >
        {withCloseBtn && (
          <span onClick={handleClose} className={cls.close__button}>
            &times;
          </span>
        )}
        {children}
      </div>
    </div>
  );
});
