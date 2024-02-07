import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { children, className = '', ...otherProps } = props;
  return (
    <button
      type='button'
      className={`${cls.button} ${cls[className]} `}
      {...otherProps}
    >
      {children}
    </button>
  );
});
