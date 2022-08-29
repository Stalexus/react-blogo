import { Link } from "react-router-dom";
import styled from "styled-components"
import { Color } from "../../ui/colors";

export const ArticleLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  padding: 10px;
`;

export const Picture = styled.img`
  width: 285px;
  height: 250px;
  border-radius: 15px;
  opacity: 0.6;
  cursor: pointer;
  :hover{
    opacity: 1;
  }
`;

export const PictureWrapper = styled.div`
  height: 250px;
  border-radius: 15px;
  background-color: ${Color.Violet};
`;