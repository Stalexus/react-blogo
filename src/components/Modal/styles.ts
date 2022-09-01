import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "../../ui/typography";
import { Color } from "../../ui/colors";

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${Color.Gray};
`;

export const ModalHeader = styled.div`
  text-align: center;
  padding: 20px;
`;

export const ModalTitle = styled.h1`
  ${typography.H1};
  color: ${Color.Light};
`;

export const ModalText = styled.p`
  ${typography.H2};
  color: ${Color.White};
`;

export const StyledSpan = styled.span`
  color: ${Color.Primary};
`;

export const ModalButton = styled(Link)`
    width: 75%;
    margin: 0 auto 50px;
    background-color: ${Color.Primary};
    border: 0;
    ${typography.H3};
    &:hover {
    background-color: ${Color.Medium};
  }
`