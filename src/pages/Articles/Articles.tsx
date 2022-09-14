import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticlesList } from "../../components/ArticleList";
import { Title } from "../../components/Title";
import { ROUTE } from "../../router/routes";
import { fetchArticles } from "../../store/features/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ArticleLink, LinkContainer, NewsLink, PaginationBtn } from "../Home/styles";
import { PaginationContainer, StyledArticle } from "./styles";

export const Articles = () => {

  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ articles }) => articles);
  const { page = "" } = useParams();
  const [limit] = useState("9");
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate(`../articles/${+page + 1}`);
  };
  const handlePrevPage = () => {
    navigate(`../articles/${+page - 1}`);
  };


  useEffect(() => {
    dispatch(fetchArticles({ limit, page }));
  }, [dispatch, limit, page]);

  return (
    <StyledArticle>
      <Title text='Articles' />
      <LinkContainer>
        <ArticleLink to={ROUTE.ARTICLES}>Articles</ArticleLink>
        <NewsLink to={ROUTE.NEWS}>News</NewsLink>
      </LinkContainer>
      <ArticlesList articles={results} isLoading={isLoading} errorMessage={error} />
      <PaginationContainer>
        <PaginationBtn onClick={handlePrevPage}
          className={`${page === "1" && "disabled"}`}>← Prev</PaginationBtn>
        <PaginationBtn onClick={handleNextPage}
          className={`${page === "804" && "disabled"}`}>Next →</PaginationBtn>
      </PaginationContainer>
    </StyledArticle>
  );
};