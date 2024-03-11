import useAddRecipe from "./useAddRecipe";
import "./AddRecipe.css";

export default function AddRecipe() {
    const { ingredientsJSX, AddIngredient } = useAddRecipe();

    return (
        <div className="mainAddRecipeContainer">
            <div className="addRecipeContainer">
                <h2>Recipe name: </h2>
                <input
                    className="textInputStyle"
                    type="text"
                    name="recipeName"
                    id="recipeName"
                    placeholder="Awesome meal..."
                />
                <hr />
                <h2>Ingredients List</h2>
                <div className="ingredientsList">
                    {ingredientsJSX}
                    <button className="btn btn-secondary" onClick={AddIngredient}>
                        Add Ingredient
                    </button>
                </div>
                <hr />
                <h2>Instructions:</h2>
                <div className="textInputStyle" contentEditable="true"></div>
            </div>
        </div>
    );
}
