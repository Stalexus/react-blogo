import { Logo } from "../../assets";
import { Мagnifier } from "../../assets";
import { Person } from "../../assets";
import { useInput } from "../../hooks/useInput";
import { ROUTE } from "../../router/routes";
import { SearchInput } from "../SearchInput";
import { NavBarAuthorizationLink, NavBarHomeLink, NavBarSearchLink, StyledNav } from "./styles";

export const Nav = () => {
  const search = useInput("");
  return (
    <StyledNav>
      <NavBarHomeLink to={ROUTE.HOME}><Logo /></NavBarHomeLink>
      <SearchInput placeholder="Search" type="text" {...search} />
      <NavBarSearchLink to={ROUTE.SEARCH}><Мagnifier /></NavBarSearchLink>
      <NavBarAuthorizationLink to={ROUTE.SIGN_IN}><Person />Enter account</NavBarAuthorizationLink>
    </StyledNav>
  );
};