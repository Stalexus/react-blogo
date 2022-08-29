import { ROUTE } from "./routes";

type RouteType =
    | [ROUTE.HOME]
    | [ROUTE.SEARCH]
    | [ROUTE.CONTENT]
    | [ROUTE.SIGN_IN]
    | [ROUTE.SIGN_UP]
    | [ROUTE.RESTORE_PASSWORD]
    | [ROUTE.ATRICLES_DETAILS, { id: number }]
    | [ROUTE.NEWS_DETAILS, { id: number }]
    | [ROUTE.NEWS]
    | [ROUTE.NOT_FOUND];

export const createPath = (...args: RouteType) => {
    const [path, params] = args;

    if (typeof params === 'undefined') return path;

    return Object.entries(params).reduce((prev: string, [param, value]) => {
        return prev.replace(`:${param}`, '' + value);
    }, path);
};