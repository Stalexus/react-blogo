import { ChangeEventHandler } from "react";

export interface IArticle {
    id: number;
    featured: boolean;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    launches: ILaunches[];
    events: ILaunches[];
}

export interface IBlog {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    launches: ILaunches[];
    events: ILaunches[];
}

export interface ILaunches {
    id?: string;
    provide: string;
}

export type RequestQueryParams = {
    limit: string;
    page: string;
    searchParams?: string;
}

export interface UserData {
    displayName: string | null;
    email: string | null;
}

export interface ISearchOptions {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}