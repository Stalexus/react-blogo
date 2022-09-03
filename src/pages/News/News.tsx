import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { NewsList } from "../../components/NewsList";
import { Title } from "../../components/Title";
import { ROUTE } from "../../router/routes";
import { LinkContainer, PaginationBtn } from "../Home/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchNews } from "../../store/feautures/newsSlice";
import { StyledNews } from "./styeles";

export const News = () => {
    const dispatch = useAppDispatch();
    const { results, isLoading, error } = useAppSelector(({ blogs }) => blogs);
    const { page = '' } = useParams();
    const [limit, setLimit] = useState('9')
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate(`../blogs/${+page + 1}`);
    };
    const handlePrevPage = () => {
        navigate(`../blogs/${+page - 1}`);
    };

    useEffect(() => {
        dispatch(fetchNews({ limit, page }));
    }, [dispatch, limit, page]);
    return (
        <StyledNews>
            <Title text='News' />
            <LinkContainer>
                <NavLink to={ROUTE.ARTICLES}>Articles</NavLink>
                <NavLink to={ROUTE.NEWS}>News</NavLink>
            </LinkContainer>
            <NewsList blogs={results} isLoading={isLoading} errorMessage={error} />
            <PaginationBtn onClick={handlePrevPage} className={`${page === '1' && 'disabled'}`}>← Prev</PaginationBtn>
            <PaginationBtn onClick={handleNextPage}>Next →</PaginationBtn>
        </StyledNews>
    )
}