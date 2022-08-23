import { Logo } from "../../assets"
import { Мagnifier } from "../../assets"
import { ROUTE } from "../../router/routes"
import { Authorization, NavBarHomeLink, NavBarSearchLink, StyledNav } from "./styles"

export const Nav = () => {
  return (
    <StyledNav>
      <NavBarHomeLink to={ROUTE.HOME}><Logo /></NavBarHomeLink>
      <NavBarSearchLink to={ROUTE.SEARCH}><Мagnifier /></NavBarSearchLink>
      <Authorization>Artem Malkin</Authorization>
    </StyledNav>
  )
}