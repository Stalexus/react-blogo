import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Media, typography } from "../../ui";
import { Color } from "../../ui/colors";

export const SignUpStyled = styled.form`
  display: flex;
  flex-direction: column;
  justyfy-content: center;
  align-items: center;
  gap: 10px;
  max-width: 520px;
  margin: auto;
  background-color: ${Color.White};
  border-radius: 16px;
`;

export const SignUpEmailInput = styled.input`
  width: 300px;
  height: 56px;
  font-size: 17px;
  border: 1px solid rgba(49, 48, 55, 0.1);
  border-radius: 4px;
  ${Media.LG} {
    width: 400px;
  }
  ${Media.MD} {
    width: 300px;
  }
  ${Media.SM} {
    width: 200px;
  }
`;

export const SignUpPasswordInput = styled(SignUpEmailInput)``;

export const SignUpLabel = styled.label`
  ${typography.B1};
  display: grid;
  padding: 40px;
`;

export const SignUpButton = styled.button`
  width: 300px;
  height: 56px;
  border: none;
  border-radius: 4px;
  background-color: ${Color.Primary};
  color: ${Color.White};
  cursor: pointer;
  ${Media.LG} {
    width: 400px;
  }
  ${Media.MD} {
    width: 300px;
  }
  ${Media.SM} {
    width: 200px;
  }
`;

export const SignUpText = styled.p`
  ${typography.B1};
  color: ${Color.Medium};
`;

export const SignUpLink = styled(NavLink)`
  pading: 5px;
  text-decoration: none;
  color: ${Color.Violet};
`;

export const ErrorMessage = styled.span`
  color: ${Color.Red};
`;
