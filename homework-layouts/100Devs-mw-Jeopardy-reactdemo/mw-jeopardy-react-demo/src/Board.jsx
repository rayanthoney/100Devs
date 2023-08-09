import React, {useState, useEffect} from "react";
import Category from "./Category"

function Board() {
const [categories, setCategories] = useState([])
    
// This useEffect hook will run once after the component is rendered.

    useEffect(() => {
        async function fetchData() {
            let offset = Math.floor(Math.random() * 28175) = 1

            // Fetch the catogories from the API

            const categoryURL = `https://localhost:6000/api/categories?count=6&offset=${offset}`
            
                const categoryResponse = await fetch(categoryURL)
                const categoryData = await categoryResponse.json()
            
            // Fetch the clues for each category
            const categoriesWithClues = await Promise.all(categoryData.map(async(category) => {
                const clueURL = `https://localhost:6000/api/clues?category=${category.id}`
            
                const clueResponse = await fetch(clueURL)
                const clueData = await clueResponse.json()
            
            // Attach the clues to the category
            return {
                ...category,
                clues: clueData,
            }
            }))
            // Put categories and clues inside of the state variable.
            setCategories(categoriesWithClues)

        }

        fetchData()
    },[])

    return (
        <div className="jeapordy-board">
            {categories.map((category) => {
                <Category key={category.id} category={category} />
            })}
        </div>
    )
}