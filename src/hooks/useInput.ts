import { ChangeEvent, useCallback, useState } from "react"

export const useInput = (initialValue: string = "") => {
    const [value, setInputValue] = useState<string>(initialValue)

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }, []);

    return {
        value,
        onChange
    }
}