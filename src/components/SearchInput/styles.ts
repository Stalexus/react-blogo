import styled from "styled-components"
import { Media } from "../../ui";

export const StyledSearch = styled.input`
  width: 950px;
  display: block;
  padding: 20px 25px;
  margin: 50px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  border: none;
  box-shadow:0px 0px 0px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  &::placeholder {
    color: #999999;
    opacity: 1;
  }
  ${Media.XL}{
    width: 750px;
  }
  ${Media.LG}{
    width: 550px;
  }
  ${Media.MD}{
    width: 400px;
  }
  ${Media.SM}{
    width: 350px;
  }
`;