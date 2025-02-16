import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.find(c => c.toLowerCase() === newCategory.toLowerCase())) {
            return;
        }
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            <div>
                {
                    categories.map(category => (
                            <GifGrid key={category} category={category} />
                        )
                    )
                }
            </div>
        </>
    )
}
