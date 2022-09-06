import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { Media } from "../../ui";
import { Color } from "../../ui/colors";
import { SignUpButton, SignUpEmailInput, SignUpLabel, SignUpLink, SignUpStyled, SignUpText } from "../SignUpForm/styles";

export const SignInStyled = styled(SignUpStyled)`
`;

export const SignInEmailInput = styled(SignUpEmailInput)`
`;

export const SignInPasswordInput = styled(SignUpEmailInput)`
`;

export const SignInLabel = styled(SignUpLabel)`
`;

export const PasswordLink = styled(NavLink)`
    display: flex;
    justify-content: start;
    text-decoration: none;
    width: 300px;
    color: black;
    :hover {
        color: ${Color.Violet};
    }
    ${Media.LG}{
        width: 400px;
    }
    ${Media.MD}{
        width: 300px;
    }
    ${Media.SM}{
        width: 200px;
    }
`;

export const SignInButton = styled(SignUpButton)`
`;

export const SignInText = styled(SignUpText)`
`;

export const SignInLink = styled(SignUpLink)`
`;