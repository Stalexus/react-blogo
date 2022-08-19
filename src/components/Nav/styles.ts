import styled from "styled-components";
import { typography } from "../../ui";

export const StyledNav = styled.div`
    display: grid;
    grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;
`;

export const HomeBtn = styled.button`
    grid-area: 1 / 2 / 2 / 4;
    padding: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const SearchBtn = styled.button`
    grid-area: 1 / 9 / 2 / 10;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const Authorization = styled.div`
    grid-area: 1 / 10 / 2 / 12;
    text-align: center;
    ${typography.S1}
`;