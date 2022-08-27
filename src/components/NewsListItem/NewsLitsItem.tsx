import { IBlog } from '../../types'
import { Picture, StyledNews } from './styles';

interface IProps {
    blog: IBlog;
}

export const NewsListItem = ({ blog }: IProps) => {
    return (
        <StyledNews>
            <Picture src={blog.imageUrl} alt='article' />
            <h4>{blog.publishedAt}</h4>
            <h4>{blog.summary}</h4>
        </StyledNews>
    )
}
