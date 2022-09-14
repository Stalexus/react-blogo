import { useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { searchArea } from "../../store/features/searchSlice";
import { useAppDispatch } from "../../store/hooks";

export const Search = () => {

  const search = useInput("");
  const debounceValue = useDebounce(search.value, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchArea(debounceValue));
  }, [debounceValue, dispatch]);



  return (
    <>
    </>
  );
};