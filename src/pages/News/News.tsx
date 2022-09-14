import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NewsList } from "../../components/NewsList";
import { Title } from "../../components/Title";
import { ROUTE } from "../../router/routes";
import { ArticleLink, LinkContainer, NewsLink, PaginationBtn } from "../Home/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchNews } from "../../store/features/newsSlice";
import { StyledNews } from "./styeles";
import { PaginationContainer } from "../Articles/styles";

export const News = () => {
  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ blogs }) => blogs);
  const { page = "" } = useParams();
  const [limit] = useState("9");
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate(`../blogs/${+page + 1}`);
  };
  const handlePrevPage = () => {
    navigate(`../blogs/${+page - 1}`);
  };

  useEffect(() => {
    dispatch(fetchNews({ limit, page }));
  }, [dispatch, limit, page]);
  return (
    <StyledNews>
      <Title text='News' />
      <LinkContainer>
        <ArticleLink to={ROUTE.ARTICLES}>Articles</ArticleLink>
        <NewsLink to={ROUTE.NEWS}>News</NewsLink>
      </LinkContainer>
      <NewsList blogs={results} isLoading={isLoading} errorMessage={error} />
      <PaginationContainer>
        <PaginationBtn onClick={handlePrevPage}
          className={`${page === "1" && "disabled"}`}>← Prev</PaginationBtn>
        <PaginationBtn onClick={handleNextPage}
          className={`${page === "804" && "disabled"}`}>Next →</PaginationBtn>
      </PaginationContainer>
    </StyledNews>
  );
};