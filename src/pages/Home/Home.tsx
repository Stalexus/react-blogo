import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { ArticleList } from "../../components/ArticleList"
import { Title } from "../../components/Title"
import { blogAPI } from "../../services/blogsApi"
import { LinkContainer, StyledHome } from "./styles"

export const Home = () => {

  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    blogAPI.getArticles().then(data => {
      setArticles(data);
    });
  }, []);

  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    blogAPI.getBlogs().then(data => {
      setBlogs(data);
    });
  }, []);
  return (
    <StyledHome>
      <Title text='Blog' />
      <LinkContainer>
        <NavLink to=''>Articles</NavLink>
        <NavLink to=''>News</NavLink>
      </LinkContainer>
      <ArticleList articles={articles} />
    </StyledHome>
  )
}
