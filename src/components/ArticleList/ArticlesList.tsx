import { DotLoader } from "react-spinners";
import { IArticle } from "../../types";
import { ArticleListItem } from "../ArticleListItem";
import { ErrorMassage, StyledArticles, StyledContainer } from "./styles";

interface IProps {
    articles: IArticle[];
    isLoading: boolean;
    errorMessage: string | null;
}

export const ArticlesList = ({ articles, isLoading, errorMessage }: IProps) => {
  if (isLoading) {
    return (
      <StyledContainer>
        <DotLoader />
      </StyledContainer>
    );
  }
  if (errorMessage) {
    return (
      <StyledContainer>
        <ErrorMassage>{errorMessage}</ErrorMassage>
      </StyledContainer>
    );
  }
  return (
    <StyledArticles>
      {articles.map(article => {
        return <ArticleListItem article={article} key={article.id} />;
      })}
    </StyledArticles>
  );
};
