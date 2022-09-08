import styled from "styled-components";
import { Color } from "../../ui/colors";
import { StyledHome } from "../Home/styles";

export const StyledArticle = styled(StyledHome)`
`;

export const PaginationBtn = styled.div`
:hover {
    color: ${Color.Violet};
}
`;

export const PaginationContainer = styled.div`
    display: grid;
`;