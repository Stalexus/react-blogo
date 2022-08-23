import { IArticle } from '../../types'
import { Picture, StyledArticle } from './styles';

interface IProps {
    article: IArticle;
}

export const ArticleListItem = ({ article }: IProps) => {
    return (
        <StyledArticle>
            <Picture src={article.imageUrl} alt='article' />
            <h4>{article.publishedAt}</h4>
            <h4>{article.summary}</h4>
        </StyledArticle>
    )
}
