import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as Мagnifier } from "../../assets/search.svg"
import { StyledNav } from "./styles"

export const Nav = () => {
  return (
    <StyledNav>
      <Logo />
      <SearchInput></SearchInput>
      <SearchBtn><Мagnifier /></SearchBtn>
    </StyledNav>
  )
}
