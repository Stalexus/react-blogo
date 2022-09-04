import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ArticleList } from "../../components/ArticleList"
import { Title } from "../../components/Title"
import { ROUTE } from "../../router/routes"
import { fetchArticles } from "../../store/feautures/articlesSlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { IArticle } from "../../types"
import { ArticleLink, LinkContainer, NewsLink, PaginationBtn } from "../Home/styles"
import { StyledArticle } from "./styles"

export const Articles = () => {

    const dispatch = useAppDispatch();
    const { results, isLoading, error } = useAppSelector(({ articles }) => articles);
    const [articles, setArticles] = useState<IArticle[]>([]);
    const { page = '' } = useParams();
    const [limit, setLimit] = useState('9');
    const navigate = useNavigate();

    const handleNextPage = () => {
        navigate(`../articles/${+page + 1}`);
    };
    const handlePrevPage = () => {
        navigate(`../articles/${+page - 1}`);
    };


    useEffect(() => {
        dispatch(fetchArticles({ limit, page }));
    }, [dispatch, limit, page]);

    return (
        <StyledArticle>
            <Title text='Articles' />
            <LinkContainer>
                <ArticleLink to={ROUTE.ARTICLES}>Articles</ArticleLink>
                <NewsLink to={ROUTE.NEWS}>News</NewsLink>
            </LinkContainer>
            <ArticleList articles={results} isLoading={isLoading} errorMessage={error} />
            <PaginationBtn onClick={handlePrevPage} className={`${page === '1' && 'disabled'}`}>← Prev</PaginationBtn>
            <PaginationBtn onClick={handleNextPage}>Next →</PaginationBtn>
        </StyledArticle>
    )
}