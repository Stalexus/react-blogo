import { useEffect, useState } from "react"
import { ArticleList } from "../../components/ArticleList"
import { Title } from "../../components/Title"
import { ROUTE } from "../../router/routes"
import { fetchArticles } from "../../store/feautures/articlesSlise"
import { useAppDispatch } from "../../store/hooks"
import { IArticle } from "../../types"
import { ArticleLink, ButtonContainer, LinkContainer, NewsLink, SortContainer, SortDay, SortMonth, SortSelect, SortWeek, SortYear, StyledHome } from "./styles"

export const Home = () => {

  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState('12')
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    dispatch(fetchArticles(limit));
  }, [dispatch, limit]);
  return (
    <StyledHome>
      <Title text='Blog' />
      <LinkContainer>
        <ArticleLink to={ROUTE.HOME}>Articles</ArticleLink>
        <NewsLink to={ROUTE.NEWS}>News</NewsLink>
      </LinkContainer>
      <SortContainer>
        <ButtonContainer>
          <SortDay text='Day' />
          <SortWeek text='Week' />
          <SortMonth text='Month' />
          <SortYear text='Year' />
        </ButtonContainer>
        <SortSelect />
      </SortContainer>
      <ArticleList articles={articles} />
    </StyledHome>
  )
}