import { useState } from 'react'
import Select from 'react-select'

export const CustomSelect = () => {
    const options = [
        { value: '', label: '' },
    ]
    return (
        <Select options={options} />
    );
};