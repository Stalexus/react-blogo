import styled from "styled-components";
import { Media } from "../../ui";

export const StyledSelect = styled.select`
    width: 250px;
    height: 50px;
    border: none;
    ${Media.LG}{
        width: 200px;
    }
`;