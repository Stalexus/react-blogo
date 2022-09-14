import { ChangeEventHandler } from "react";
import { StyledSearch } from "./styles";

interface IProps {
    placeholder: string;
    type: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: () => void;
    error?: string | undefined;
}

export const SearchInput = ({ placeholder, type, value, onChange, onBlur, error }: IProps) => {
  return (
    <StyledSearch
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
    />
  );
};