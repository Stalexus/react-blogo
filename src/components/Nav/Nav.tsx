import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as Мagnifier } from "../../assets/search.svg"
import { Authorization, SearchBtn, StyledNav, Wrapper } from "./styles"

export const Nav = () => {
  return (
    <StyledNav>
      <Wrapper><Logo /></Wrapper>
      <SearchBtn><Мagnifier /></SearchBtn>
      <Authorization>Artem Malkin</Authorization>
    </StyledNav>
  )
}
