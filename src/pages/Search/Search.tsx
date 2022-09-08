import { useEffect } from "react";
import { ArticleList } from "../../components/ArticleList";
import { SearchInput } from "../../components/SearchInput";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { SearchArea } from "../../store/features/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const Search = () => {

  const { results, isLoading, error } = useAppSelector(({ articles }) => articles);
  const search = useInput("");
  const debounceValue = useDebounce(search.value, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(SearchArea(debounceValue))
  }, [debounceValue, dispatch]);

  return (
    <>
      <SearchInput placeholder="Search" type="text" {...search} />
      <ArticleList articles={results} isLoading={isLoading} errorMessage={error} />
    </>
  )
}
