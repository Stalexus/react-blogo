import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { typography } from "../../ui";
import { Color } from "../../ui/colors";

export const SignUpStyled = styled.form`
    max-width: 800px;
    margin: auto;
    gap: 35px;
    display: flex;
    flex-direction: column;
    justyfy-content: center;
    align-items: center;
    background-color: ${Color.White};
    border-radius: 16px;
`;

export const SignUpEmailInput = styled.input`
    width: 544px;
    height: 56px;
    font-size: 17px;
    border: 1px solid rgba(49, 48, 55, 0.1);
    border-radius: 4px;
`;

export const SignUpPasswordInput = styled(SignUpEmailInput)`
`;

export const SignUpLabel = styled.label`
    ${typography.B1};
    padding: 25px;
    display: grid;
`;

export const PasswordLink = styled(NavLink)`
    width: 544px;
    justify-content: start;
    text-decoration: none;
    color: black;
    :hover {
        color: ${Color.Violet};
    }
`;

export const LoginButton = styled.button`
    width: 544px;
    height: 56px;
    border: none;
    border-radius: 4px;
    background-color: ${Color.Primary};
    color: ${Color.White};
`;

export const SignInText = styled.p`
    ${typography.B1};
    color: ${Color.Medium};
`;

export const SignInLink = styled(NavLink)`
    pading: 5px;
    text-decoration: none;
    color: ${Color.Violet};
`;