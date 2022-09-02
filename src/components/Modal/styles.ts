import { Link } from "react-router-dom";
import styled from "styled-components";
import { typography } from "../../ui/typography";
import { Color } from "../../ui/colors";
import { Media } from "../../ui";

export const ModalBackground = styled.div`
  position: absolute;
  top: 38%;
  left: 31%;
  display: flex;
  justify-content: center;
  align-items:center;
  backgroundColor: ${Color.Light}
  ${Media.XXL}{
    top: 16%;
    left: 40%;
  }
  ${Media.XL}{
    top: 32%;
    left: 27%;
  }
  ${Media.LG}{
    top: 43%;
    left: 23%;
  }
  ${Media.MD}{
    top: 35%;
    left: 19%;
  }
  ${Media.SM}{
    width: 225px;
    top: 29%;
    left: 24%;
  }
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  background-color: ${Color.Medium};
`;

export const ModalTitle = styled.h1`
  ${typography.H1};
  color: ${Color.Secondary};
`;

export const ModalText = styled.p`
  ${typography.H2};
  color: ${Color.Secondary};
`;

export const StyledSpan = styled.span`
  color: ${Color.Primary};
`;

export const ModalButton = styled(Link)`
  text-align: center;
  width: 40%;
  margin: auto;
  padding: 5px;
  background-color: ${Color.Violet};
  border: 0;
  border-radius: 5px;
  ${typography.H3};
  &:hover {
  background-color: ${Color.Primary};
  }
`