// you can mutate refs directly, changing them does not cause a re-render.
// They are commoly used for accessing dom nodes without need to asssign id to elements. 
import React from "react"
import {Link} from "react-router-dom";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../ai";

export default function Main(){
    const [ingredients, setIngredients] = React.useState([]) 
    const [receipe, setRecipe] = React.useState(""); 
    const [isLoading, setIsLoading] = React.useState(false); 
    const receipeSection = React.useRef(null); 
    const ingredientSection = React.useRef(null); 
    console.log(receipeSection)

    const addIngredients = (formData) => {
        const newIngredient = formData.get("ingredient") 

        // if there is an actual input value (newINgredient) then setIngredient will work otherwise, setINgredient will not work. So button will not do anything. 
        {newIngredient && 
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }


    // task - auto scroll to ready for a receipe div to view , only after receipe section is rendered to the page. 
    // i.e when the recipe is not an empty string
    React.useEffect(() => {
        if ((isLoading || receipe !== "") && receipeSection.current !== null) {
            // receipeSection.current.scrollIntoView({behavior: "smooth"}); //showing Cors policy releted error, so you might use below code 
            const yCoord = receipeSection.current.getBoundingClientRect().top + window.scrollY; 
            window.scroll({
                top: yCoord, 
                behavior: "smooth"
            })
        }
    }, [receipe, isLoading])


    async function getRecipe(){
        setIsLoading(true); 
        const receipeMarkDown = await getRecipeFromMistral(ingredients);
        setRecipe(receipeMarkDown); 
        setIsLoading(false);
        console.log(receipeMarkDown); 
    }

    const handleReset = () => {
        setRecipe("")
        setIngredients([])
        console.log(`Reset clicked, receipe cleared !`)
    }

    const handleDeleteIngredient = (indexToDelete) => {
        setIngredients(ingredients.filter((_, index) => index !== indexToDelete));
    };

    return(
        <main className="main-component" >
            <Link to='/' className="link-to-home">← Back to Home</Link>
            <form action={addIngredients} className="add-ingredient-form">
                <input 
                    aria-label = "Add ingredient" 
                    type="text"
                    placeholder="Type here..." 
                    name="ingredient"
                />
                <button>+ Add Ingredient</button>
            </form>

            {/* if there is alleast 1 element then we gotta display the section.*/}
            {ingredients.length >= 0 && 
            <IngredientList
                ref = {ingredientSection}
                ingredients = {ingredients}
                getRecipe = {getRecipe}  
                onDelete = {handleDeleteIngredient}
            />
            }

            {/* Show loading state in the same place as recipe */}
            {isLoading && 
                <section className='suggested-recipe-container loading-container' ref={receipeSection}>
                    <div className="loading-content">
                        <div className="loading-spinner"></div>
                        <p className="loading-text">Cooking up your recipe<span className="loading-dots"></span></p>
                    </div>
                </section>
            }

            {/* Show recipe when loaded and not loading */}
            {receipe && !isLoading && 
                <div ref={receipeSection}>
                    <ClaudeRecipe 
                        receipe={receipe}
                        onReset={handleReset}
                    />
                </div>
            }
        </main>
    )
}