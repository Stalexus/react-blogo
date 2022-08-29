import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NewsList } from "../../components/NewsList";
import { Title } from "../../components/Title";
import { ROUTE } from "../../router/routes";
import { blogAPI } from "../../services/blogsApi";
import { IBlog } from "../../types";
import { LinkContainer } from "../Home/styles";

export const News = () => {
    const [blogs, setBlogs] = useState<IBlog[]>([]);

    useEffect(() => {
        blogAPI.getBlogs().then(blogs => {
            setBlogs(blogs);
        });
    }, []);
    return (
        <>
            <Title text='News' />
            <LinkContainer>
                <NavLink to={ROUTE.HOME}>Articles</NavLink>
                <NavLink to={ROUTE.NEWS}>News</NavLink>
            </LinkContainer>
            <NewsList blogs={blogs} />
        </>
    )
}

