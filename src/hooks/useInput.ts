import { ChangeEventHandler, useState } from "react";
import { ISearchOptions } from "../types";

export const useInput = (initialValue: string): ISearchOptions => {
  const [value, setInputValue] = useState<string>("");

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setInputValue(target.value);
  };

  return { value, onChange };
};
