import { useEffect, useState } from "react";

export const useSearch = (value: string, delay: number) => {
    const [searchValue, setSearchValue] = useState<string>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchValue(value);
        }, delay || 500);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return searchValue;
};