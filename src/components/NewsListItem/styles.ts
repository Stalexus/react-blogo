import styled from "styled-components"

export const StyledNews = styled.div`
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