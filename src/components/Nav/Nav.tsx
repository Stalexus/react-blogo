import { Logo } from "../../assets"
import { Мagnifier } from "../../assets"
import { Authorization, HomeBtn, SearchBtn, StyledNav } from "./styles"

export const Nav = () => {
  return (
    <StyledNav>
      <HomeBtn><Logo /></HomeBtn>
      <SearchBtn><Мagnifier /></SearchBtn>
      <Authorization>Artem Malkin</Authorization>
    </StyledNav>
  )
}
