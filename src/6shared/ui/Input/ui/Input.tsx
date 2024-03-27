import type { InputHTMLAttributes, Ref } from 'react';
import { memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>;

interface InputProps extends HTMLInputProps {
  value?: string | number;
  label?: string;
  inputRef?: Ref<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = memo((props: InputProps) => {
  const { value, onChange, inputRef, ...otherProps } = props;

  return (
    <input
      ref={inputRef}
      className={cls.input}
      value={value}
      onChange={onChange}
      {...otherProps}
    ></input>
  );
});
