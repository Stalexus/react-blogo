import styled from "styled-components";
import { typography } from "../../ui";
import { Color } from "../../ui/colors";

export const Button = styled.button`
  margin: 10px;
  padding: 15px;
  border: none;
  border-radius: 4px;
  background-color: ${Color.Light};
  color: ${Color.Secondary};
  font-size: ${typography.S1};
  :hover {
    background-color: ${Color.Violet};
    color: ${Color.White};
  }
  :active {
    background-color: ${Color.Primary};
  }
`;
