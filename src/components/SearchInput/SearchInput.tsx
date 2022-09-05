import { useEffect } from "react";
import { useInput } from "../../hooks/useInput";
import { useDebounce } from "../../hooks/useDebounce";
import { StyledSearch } from "./styles";
import { useAppDispatch } from "../../store/hooks";
import { SearchArea } from "../../store/features/articlesSlice";

export const SearchInput = () => {
  const searchInput = useInput();
  const debounceValue = useDebounce(searchInput.value, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(SearchArea(debounceValue))
  }, [debounceValue, dispatch]);

  return <StyledSearch placeholder="search ..." type="text" {...searchInput} />;
}