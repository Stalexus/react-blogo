import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { Media } from "../../ui";
import { Color } from "../../ui/colors";

export const StyledSignUp = styled.div`
    padding: 50px;
    background-color: ${Color.Gray};
`;

export const StyledForm = styled.div`
    padding: 65px;
    ${Media.MD}{
        padding: 10px;
    }
`;

export const HomeLink = styled(NavLink)`
    padding: 10px;
    text-decoration: none;
    color: black;
    :hover {
        color: ${Color.Violet};
    } 
`;