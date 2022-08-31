import { Button } from './styles'

interface IProps {
    text: string;
}

export const SortButton = ({ text }: IProps) => {
    return (
        <Button>{text}</Button>
    )
}