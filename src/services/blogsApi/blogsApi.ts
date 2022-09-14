import axios from "axios";
import { IArticle, IBlog, RequestQueryParams } from "../../types";

enum Endpoint {
  ARTICLES = "/articles",
  BLOGS = "/blogs",
  SEARCH = "/search",
}

class BlogAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BLOG_API as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });
  public getArticles = async ({ limit, page }: RequestQueryParams) => {
    const { data } = await this.API.get<IArticle[]>(
      `${Endpoint.ARTICLES}?_limit=${limit}&_start=${page}`,
    );
    return data;
  };
  public getSearchArticles = async ({ limit, page, searchParams }: RequestQueryParams) => {
    const { data } = await this.API.get<IArticle[]>(
      `${Endpoint.SEARCH}?_limit=${limit}&_start=${page}&_title_contains=${searchParams}`,
    );
    return data;
  };
  public getBlogs = async ({ limit, page }: RequestQueryParams) => {
    const { data } = await this.API.get<IBlog[]>(
      `${Endpoint.BLOGS}?_limit=${limit}&_start=${page}`,
    );
    return data;
  };
}

export const blogAPI = new BlogAPI();
