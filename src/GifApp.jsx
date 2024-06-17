import { useState } from "react"
import { AddCategoryComponent,GifGrid} from "./components"
// import { GifGrid } from "./components/GifGrid"



export const GifApp = () => {

    const [categories, setcategories] = useState([])

    const addCategory= (value) => {
        if (categories.includes(value)) return;
        setcategories([value, ...categories])
    }

    return (
        <>
            <h1>Consulta en la GifApp</h1>
            <AddCategoryComponent 
                onAddCategory= {addCategory}
            />
                {categories.map( (category) =>  (
                        <GifGrid key={category} 
                        category= {category}
                        />
                    )
                )}
            </>
    )
}
