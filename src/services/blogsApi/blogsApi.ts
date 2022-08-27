import axios from "axios";
import { IArticle, IBlog } from "../../types";

enum Endpoint {
    ARTICLES = 'articles',
    NEWS = 'blogs',
}

class BlogAPI {
    private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BLOG_API as string;
    private readonly API = axios.create({
        baseURL: this.BASE_URL
    });
    public getArticles = async (): Promise<IArticle[]> => {
        const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES)
        return data;
    };
    public getBlogs = async (): Promise<IBlog[]> => {
        const { data } = await this.API.get<IBlog[]>(Endpoint.NEWS);
        return data;
    };
}

export const blogAPI = new BlogAPI();