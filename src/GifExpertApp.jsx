import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['zelda'])

    //console.log(categories);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //setCategories ([...categories, 'Navy']) sirve esto y la linea que sigue
        setCategories(cat => [newCategory, ...cat]);

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
