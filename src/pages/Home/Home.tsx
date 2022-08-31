import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { ArticleList } from "../../components/ArticleList"
import { Title } from "../../components/Title"
import { ROUTE } from "../../router/routes"
import { blogAPI } from "../../services/blogsApi"
import { IArticle } from "../../types"
import { ArticleLink, ButtonContainer, LinkContainer, NewsLink, SortContainer, SortDay, SortMonth, SortSelect, SortWeek, SortYear, StyledHome } from "./styles"

export const Home = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    blogAPI.getArticles().then(aritcles => {
      setArticles(aritcles);
    });
  }, []);
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
