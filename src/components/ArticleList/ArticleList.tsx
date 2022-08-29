import { IArticle } from '../../types'
import { ArticleListItem } from '../ArticleListItem'
import { StyledArticles } from './styles';

interface IProps {
    articles: IArticle[];
}

export const ArticleList = ({ articles }: IProps) => {
    return (
        <StyledArticles>
            {articles.map(article => {
                return <ArticleListItem article={article} key={article.id} />
            })}
        </StyledArticles>
    )
}
