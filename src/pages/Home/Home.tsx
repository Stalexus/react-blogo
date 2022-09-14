import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticlesList } from "../../components/ArticleList";
import { CustomSelect } from "../../components/CustomSelect";
import { Title } from "../../components/Title";
import { ROUTE } from "../../router/routes";
import { fetchArticles } from "../../store/features/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  ArticleLink,
  ButtonContainer,
  LinkContainer,
  NewsLink,
  SortContainer,
  SortDay,
  SortMonth,
  SortWeek,
  SortYear,
  StyledHome
} from "./styles";

export const Home = () => {

  const dispatch = useAppDispatch();
  const { results, isLoading, error } = useAppSelector(({ articles }) => articles);
  const { page = "" } = useParams();
  const [limit] = useState("12");

  useEffect(() => {
    dispatch(fetchArticles({ limit, page }));
  }, [dispatch, limit, page]);

  return (
    <StyledHome>
      <Title text='Blog' />
      <LinkContainer>
        <ArticleLink to={ROUTE.ARTICLES}>Articles</ArticleLink>
        <NewsLink to={ROUTE.NEWS}>News</NewsLink>
      </LinkContainer>
      <SortContainer>
        <ButtonContainer>
          <SortDay text='Day' />
          <SortWeek text='Week' />
          <SortMonth text='Month' />
          <SortYear text='Year' />
        </ButtonContainer>
        <CustomSelect />
      </SortContainer>
      <ArticlesList articles={results} isLoading={isLoading} errorMessage={error} />
    </StyledHome>
  );
};