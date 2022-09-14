import styled from "styled-components";
import { typography } from "../../ui";
import { Color } from "../../ui/colors";

export const Container = styled.div`
  grid-area: main;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export const Title = styled.p`
  ${typography.H1};
  color: ${Color.Primary};
  text-align: center;
`;

export const Key = styled.p`
  ${typography.H2};
  color: ${Color.Light};
`;

export const Value = styled.p`
  ${typography.H2};
  color: ${Color.White};
`;
