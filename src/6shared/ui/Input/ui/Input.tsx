import type { InputHTMLAttributes } from 'react';
import { memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>;

interface InputProps extends HTMLInputProps {
  value?: string | number;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = memo((props: InputProps) => {
  const { value, onChange, ...otherProps } = props;

  return (
    <input
      className={cls.input}
      value={value}
      onChange={onChange}
      {...otherProps}
    ></input>
  );
});
