import { useState } from "react";
import Ingredient from "../../Components/AddRecipe/Ingredient";

export default function useAddRecipe() {
    // const [ingredients, setIngredients] = useState<string[]>([]);
    const [ingredientsJSX, setIngredientsJSX] = useState<JSX.Element[]>([]);

    function deleteMe() {
        setIngredientsJSX((prev) => prev.slice(0, -1));
    }

    function AddIngredient() {
        setIngredientsJSX((prev) => [
            ...prev,
            <div className="ingredientInputBox">
                {/* <input placeholder="Ingredient..." className="ingredientInput" type="text" />
                <button className="ingredientButton" onClick={deleteMe}>
                    X
                </button> */}
                <Ingredient />
            </div>,
        ]);
    }

    return { ingredientsJSX, AddIngredient };
}
