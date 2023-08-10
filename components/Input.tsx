import { KeyboardEvent } from 'react';

type Props = {
  type: string;
  className?: string;
  placeholder?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (ev: KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
};

export default function TextInput({
  type,
  className,
  placeholder,
  onChange,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  disabled = false,
}: Props) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      disabled={disabled}
    />
  );
}
