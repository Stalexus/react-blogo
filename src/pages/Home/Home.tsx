import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { ArticleList } from "../../components/ArticleList"
import { Title } from "../../components/Title"
import { ROUTE } from "../../router/routes"
import { blogAPI } from "../../services/blogsApi"
import { IArticle } from "../../types"
import { LinkContainer } from "./styles"

export const Home = () => {

  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    blogAPI.getArticles().then(data => {
      setArticles(data);
    });
  }, []);
  return (
    <>
      <Title text='Blog' />
      <LinkContainer>
        <NavLink to={ROUTE.HOME}>Articles</NavLink>
        <NavLink to={ROUTE.NEWS}>News</NavLink>
      </LinkContainer>
      <ArticleList articles={articles} />
    </>
  )
}
