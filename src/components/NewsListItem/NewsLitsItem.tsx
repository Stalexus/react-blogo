import { IBlog } from '../../types'
import { PictureWrapper } from '../ArticleListItem/styles';
import { Picture, StyledNews } from './styles';

interface IProps {
    blog: IBlog;
}

export const NewsListItem = ({ blog }: IProps) => {
    return (
        <StyledNews>
            <PictureWrapper>
                <Picture src={blog.imageUrl} alt='article' />
            </PictureWrapper>
            <h4>{blog.publishedAt}</h4>
            <h4>{blog.summary}</h4>
        </StyledNews>
    )
}
