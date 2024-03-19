import type { ChangeEvent } from 'react';
import { memo } from 'react';

interface CheckboxProps {
  name: string;
  value: number;
  disabled?: boolean;
  checked?: boolean;
  selectedPlayers?: Array<number>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = memo((props: CheckboxProps) => {
  const { name, disabled, value, checked, onChange } = props;

  return (
    <label>
      {name}
      <input
        checked={checked}
        type='checkbox'
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
    </label>
  );
});
