import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const cleanInputValue = inputValue?.trim();
        if (cleanInputValue.length <= 2) {
            return;
        }
        onNewCategory(cleanInputValue);
        setInputValue('');
    };
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs..." value={inputValue} onChange={onInputChange} />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
