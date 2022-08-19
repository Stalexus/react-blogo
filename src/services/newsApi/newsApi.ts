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
        const response = await axios.get(this.BASE_URL + Endpoint.ARTICLES)
        return response.data
    }
    public getBlogs = async () => {
        const response = await axios.get(this.BASE_URL + Endpoint.NEWS);
        return response.data;
    };
}

export const newsAPI = new BlogAPI();