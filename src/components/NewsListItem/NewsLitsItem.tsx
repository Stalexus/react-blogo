import { ROUTE } from "../../router/routes";
import { createPath } from "../../router/utils";
import { IBlog } from "../../types";
import { Description, PictureWrapper } from "../ArticleListItem/styles";
import { Picture, NewsLink } from "./styles";

interface IProps {
    blog: IBlog;
}

export const NewsListItem = ({ blog }: IProps) => {

  const date = new Date(blog.publishedAt).toDateString();

  return (
    <NewsLink to={createPath(ROUTE.NEWS_DETAILS, { id: blog.id })}>
      <PictureWrapper>
        <Picture src={blog.imageUrl} alt='blog' />
      </PictureWrapper>
      <h4>{date}</h4>
      <Description>{blog.summary}</Description>
    </NewsLink >
  );
};