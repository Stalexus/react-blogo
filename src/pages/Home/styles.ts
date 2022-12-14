import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SortButton } from "../../components/SortButton";
import { Media } from "../../ui";
import { Color } from "../../ui/colors";

export const LinkContainer = styled.div`
    display: flex;
    gap: 40px;
    padding: 10px;
`;

export const SortContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 890px;
    ${Media.LG}{
        max-width: 588px;
    }
`;

export const ButtonContainer = styled.div`
`;

export const SortDay = styled(SortButton)`
`;

export const SortWeek = styled(SortButton)`
`;

export const SortMonth = styled(SortButton)`
`;

export const SortYear = styled(SortButton)`
`;

export const StyledHome = styled.div`
    margin: auto; 
    ${Media.LG}{
        
        max-width: 600px;
    }
    ${Media.MD}{
        max-width: 290px;
    }
`;

export const ArticleLink = styled(NavLink)`
    color: ${Color.Secondary};
    :hover {
        color: ${Color.Violet};
    }
`;

export const NewsLink = styled(ArticleLink)`
`;

export const PaginationBtn = styled.button`
    border: none;
    backgroung: tranparent;
    color: ${Color.Medium};
`;