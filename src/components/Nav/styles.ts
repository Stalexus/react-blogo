import styled from "styled-components";
import { typography } from "../../ui";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.div`
    display: grid;
    grid-template-columns: 0.1fr repeat(8,1fr) 0.1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;
`;

export const NavBarHomeLink = styled(NavLink)`
    grid-area: 1 / 2 / 2 / 4;
    padding: 5px;
`;

export const NavBarSearchLink = styled(NavLink)`
    grid-area: 1 / 8 / 2 / 9;
`;

export const NavBarAuthorizationLink = styled(NavLink)`
    grid-area: 1 / 9 / 2 / 10;
    text-align: center;
    ${typography.S1}
`;