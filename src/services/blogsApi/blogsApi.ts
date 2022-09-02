import axios from "axios";
import { IArticle, IBlog } from "../../types";

class BlogAPI {
    private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BLOG_API as string;
    private readonly API = axios.create({
        baseURL: this.BASE_URL
    });
    public getArticles = async (limit: string) => {
        const { data } = await this.API.get<IArticle[]>(`/articles?_limit=${limit}`)
        return data;
    };
    public getBlogs = async (limit: string) => {
        const { data } = await this.API.get<IBlog[]>(`/blog?_limit=${limit}`);
        return data;
    };
}

export const blogAPI = new BlogAPI();