import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewsLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 340px;
  padding: 10px;
`;

export const Picture = styled.img`
  width: 285px;
  height: 250px;
  border-radius: 15px;
  opacity: 0.6;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
