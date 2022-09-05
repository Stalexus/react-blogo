import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleList } from "../../components/ArticleList";
import { SearchInput } from "../../components/SearchInput"
import { fetchArticles } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const Search = () => {

  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ articles }) => articles);
  const { page = '' } = useParams();
  const [limit, setLimit] = useState('15');

  useEffect(() => {
    dispatch(fetchArticles({ limit, page }));
  }, [dispatch, limit, page]);

  return (
    <>
    <SearchInput />
    <ArticleList articles={results} isLoading={isLoading} errorMessage={error} />
    </>
  )
}
