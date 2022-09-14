import { IArticle } from "../../types";
import { Description, Picture, PictureWrapper } from "../ArticleListItem/styles";

interface IProps {
    article: IArticle;
}

export const ArticleDetails = ({ article }: IProps) => {

  const date = new Date(article.publishedAt).toDateString();

  return (
    <>
      <PictureWrapper>
        <Picture src={article.imageUrl} alt='article' />
      </PictureWrapper>
      <h4>{date}</h4>
      <h4>{article.url}</h4>
      <h4>{article.title}</h4>
      <h4>{article.summary}</h4>
      <h4>{article.publishedAt}</h4>
      <h4>{article.newsSite}</h4>
      <h4>{article.imageUrl}</h4>
      <h4>{article.id}</h4>
      <h4>{article.featured}</h4>
      <Description>{article.summary}</Description>
    </>
  );
};