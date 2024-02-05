import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { children, classname = '', ...otherProps } = props;
  return (
    <button
      type='button'
      className={`${cls.button} ${cls[classname]} `}
      {...otherProps}
    >
      {children}
    </button>
  );
});
