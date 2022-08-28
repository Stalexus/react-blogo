import { IArticle } from '../../types'
import { Picture, PictureWrapper, StyledArticle } from './styles';

interface IProps {
    article: IArticle;
}

export const ArticleListItem = ({ article }: IProps) => {
    return (
        <StyledArticle>
            <PictureWrapper>
                <Picture src={article.imageUrl} alt='article' />
            </PictureWrapper>
            <h4>{article.publishedAt}</h4>
            <h4>{article.summary}</h4>
        </StyledArticle>
    )
}
