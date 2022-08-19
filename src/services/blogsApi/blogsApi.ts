import axios from "axios";

enum Endpoint {
    ARTICLES = 'articles/',
    NEWS = 'blogs/',
}

class BlogAPI {
    private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BLOG_API as string;;
    private readonly API = axios.create({
        baseURL: this.BASE_URL
    });
    public getArticles = async () => {
        const { data } = await this.API.get(Endpoint.ARTICLES)
        return data
    }
    public getBlogs = async () => {
        const { data } = await this.API.get(Endpoint.NEWS);
        return data;
    };
}

export const blogAPI = new BlogAPI();