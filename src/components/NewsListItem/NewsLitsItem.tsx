import { ROUTE } from '../../router/routes';
import { createPath } from '../../router/utils';
import { IBlog } from '../../types'
import { PictureWrapper } from '../ArticleListItem/styles';
import { Picture, NewsLink } from './styles';

interface IProps {
    blog: IBlog;
}

export const NewsListItem = ({ blog }: IProps) => {
    return (
        <NewsLink to={createPath(ROUTE.NEWS_DETAILS, { id: blog.id })}>
            <PictureWrapper>
                <Picture src={blog.imageUrl} alt='article' />
            </PictureWrapper>
            <h4>{blog.publishedAt}</h4>
            <h4>{blog.summary}</h4>
        </NewsLink >
    )
}