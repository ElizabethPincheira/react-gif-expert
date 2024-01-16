import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if (inputValue.trim().length <= 1 ) return;
        //setCategories (set =>[inputValue, ...set ]);
        
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit = { onSubmit }>
        {/* <form onSubmit = { (event) => onSubmit(event) }> no es necesario el event, porque el argumento lo recibe arriba */}
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
