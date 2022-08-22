import { NavLink } from "react-router-dom"
import { Title } from "../../components/Title/Title"
import { LinkContainer, StyledHome } from "./styles"

export const Home = () => {
  return (
    <StyledHome>
      <Title text='Blog' />
      <LinkContainer>
        <NavLink to=''>Articles</NavLink>
        <NavLink to=''>News</NavLink>
      </LinkContainer>
    </StyledHome>
  )
}
