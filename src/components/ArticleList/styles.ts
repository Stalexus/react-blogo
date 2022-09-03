import styled from "styled-components"
import { typography } from "../../ui";
import { Color } from "../../ui/colors";

export const StyledArticles = styled.div`
    max-width: 950px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
`;

export const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
`;

export const ErrorMassage = styled.p`
  ${typography.H2};
  ${Color.Red};
  margin-top: 50px;
`;