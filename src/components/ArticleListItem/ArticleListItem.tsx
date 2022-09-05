import { ROUTE } from '../../router/routes';
import { createPath } from '../../router/utils';
import { IArticle } from '../../types'
import { Picture, PictureWrapper, ArticleLink } from './styles';

interface IProps {
    article: IArticle;
}

export const ArticleListItem = ({ article }: IProps) => {

    const date = new Date(article.publishedAt).toDateString();

    return (
        <ArticleLink to={createPath(ROUTE.ATRICLES_DETAILS, { id: article.id })}>
            <PictureWrapper>
                <Picture src={article.imageUrl} alt='article' />
            </PictureWrapper>
            <h4>{date}</h4>
            <h4>{article.summary}</h4>
        </ArticleLink>
    )
}