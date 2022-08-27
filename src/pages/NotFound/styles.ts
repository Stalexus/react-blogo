import styled from "styled-components"
import { Media } from "../../ui";

export const NotFoundImage = styled.div`
    width: 100%;
    height: 100%;
`;

export const NotFoundWrapper = styled.div`
    width: 1260px;
    height: 800px;
    ${Media.LG} {
        width: 1024px;
        height: 700px;
    }
    ${Media.MD} {
        width: 768px;
        height: 600px;
    }
    ${Media.SM} {
        width: 420px;
        height: 500px;
    }
`;

