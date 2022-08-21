import { NavLink } from "react-router-dom"
import { Title } from "../../components/Title/Title"
import { LinkContainer, StyledHome } from "./styles"

export const Home = () => {
  return (
    <StyledHome>
      <Title text='Blog' />
      <LinkContainer>
        <NavLink to="articles">Articles</NavLink>
        <NavLink to="blogs">News</NavLink>
      </LinkContainer>
    </StyledHome>
  )
}
