import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { NewsList } from "../../components/NewsList";
import { Title } from "../../components/Title";
import { ROUTE } from "../../router/routes";
import { IBlog } from "../../types";
import { LinkContainer } from "../Home/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchNews } from "../../store/feautures/newsSlice";

export const News = () => {
    const dispatch = useAppDispatch();
    const { results, isLoading, error } = useAppSelector(({ articles }) => articles);
    const [limit, setLimit] = useState('12')
    const { page = '' } = useParams();
    const [blogs, setBlogs] = useState<IBlog[]>([]);

    useEffect(() => {
        dispatch(fetchNews({ limit, page }));
    }, [dispatch, limit, page]);
    return (
        <>
            <Title text='News' />
            <LinkContainer>
                <NavLink to={ROUTE.HOME}>Articles</NavLink>
                <NavLink to={ROUTE.NEWS}>News</NavLink>
            </LinkContainer>
            <NewsList blogs={results} isLoading={isLoading} errorMessage={error}  />
        </>
    )
}

