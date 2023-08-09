'use client';
import { useState, ChangeEvent, KeyboardEvent } from 'react';

type Props = {
  className?: string;
  placeholder?: string;
  onChange: ({ value }: { value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (ev: KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
};

export default function TextInput({
  className,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  value = '',
  disabled = false,
}: Props) {
  const [text, setText] = useState(value);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;
    setText(value);
    onChange({ value });
  };

  className = className + ' outline-none';

  return (
    <input
      type='text'
      value={text}
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      disabled={disabled}
    />
  );
}
