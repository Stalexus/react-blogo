import styled from "styled-components";
import { Media } from "../../ui";
import { Color } from "../../ui/colors";

export const StyledSearch = styled.input<{ error: string | undefined }>`
  grid-area: 1 / 6 / 2 / 8;
  width: 500px;
  display: block;
  padding: 20px 25px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  border: none;
  box-shadow: 0px 0px 0px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  color: ${Color.Medium};
  background-color: ${Color.White};
  outline: ${(props) => (props.error ? `2px solid ${Color.Red}` : 0)};
  &::placeholder {
    color: ${Color.Medium};
    opacity: 1;
    &:disabled {
      color: ${Color.Light};
    }
  }
  &:focus-visible {
    outline: 2px solid ${Color.Primary};
  }
  &:disabled {
    background-color: ${Color.Secondary};
  }
  ${Media.XL} {
    width: 400px;
  }
  ${Media.LG} {
    width: 300px;
  }
  ${Media.MD} {
    width: 200px;
  }
  ${Media.SM} {
    width: 100px;
  }
`;
