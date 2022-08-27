import { Logo } from "../../assets"
import { Мagnifier } from "../../assets"
import { ROUTE } from "../../router/routes"
import { NavBarAuthorizationLink, NavBarHomeLink, NavBarSearchLink, StyledNav } from "./styles"

export const Nav = () => {
  return (
    <StyledNav>
      <NavBarHomeLink to={ROUTE.HOME}><Logo /></NavBarHomeLink>
      <NavBarSearchLink to={ROUTE.SEARCH}><Мagnifier /></NavBarSearchLink>
      <NavBarAuthorizationLink to={ROUTE.SIGN_IN}>Enter account</NavBarAuthorizationLink>
    </StyledNav>
  )
}