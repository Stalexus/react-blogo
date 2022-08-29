import { IBlog } from '../../types'
import { NewsListItem } from '../NewsListItem';
import { StyledNews } from './styles';

interface IProps {
    blogs: IBlog[];
}

export const NewsList = ({ blogs }: IProps) => {
    return (
        <StyledNews>
            {blogs.map(blog => {
                return <NewsListItem blog={blog} key={blog.id} />
            })}
        </StyledNews>
    )
}
