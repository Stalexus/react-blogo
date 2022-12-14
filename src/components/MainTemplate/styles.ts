import styled from "styled-components";
import { Color } from "../../ui/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  min-height: calc(100vh - 110px);
  background-color: ${Color.Gray};
`;

export const Footer = styled.div`
  height: 50px;
`;
