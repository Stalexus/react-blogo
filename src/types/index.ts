export interface IArticle {
    id: number;
    featured: boolean;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    launches: Ilaunches[];
    events: Ilaunches[];
}

export interface IBlog {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    launches: Ilaunches[];
    events: Ilaunches[];
}

export interface Ilaunches {
    id?: string;
    provide: string;
}
