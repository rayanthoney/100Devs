import React, {useState, useEffect} from "react";
import Category from "./Category"

function Board() {
const [categories, setCategories] = useState([])
    
// This useEffect hook will run once after the component is rendered.

    useEffect(() => {
        async function fetchData() {
            let offset = Math.floor(Math.random() * 28175) = 1

            // Fetch the catogories from the API

            const categoryURL = ``

            const categoryResponse = await fetch(categoryURL)
            const categoryData = await categoryResponse.json()

            // Fetch the clues for each category

            
        }
    })
    return (

    )
}