import Select from 'react-select'
import { StyledSelect } from './styles';


export const CustomSelect = () => {
    const options = [
        { value: 'first new', label: 'First new' },
        { value: 'obsolete first', label: 'Obsolete first' },
    ]
    return (
        <Select options={options} 
        isMulti={false}
/>
    );
};