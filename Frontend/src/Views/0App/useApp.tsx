import { useState, useEffect, useContext } from "react";
import { NavbarContext } from "../../Context/NavbarContext";
import { NavbarContextType } from "../../Types/Context/NavbarContextTypes";
import Home from "../Home/Home";
import RecipeList from "../RecipeList/RecipeList";
import AddRecipe from "../AddRecipe/AddRecipe";
import Favorites from "../Favorites/Favorites";

export default function useApp() {
    const { navbarElement } = useContext(NavbarContext) as NavbarContextType;
    const [currentView, setCurrentView] = useState(<Home />);

    useEffect(() => {
        switch (navbarElement) {
            case "Home":
                setCurrentView(<Home />);
                break;
            case "RecipeList":
                setCurrentView(<RecipeList />);
                break;
            case "AddRecipe":
                setCurrentView(<AddRecipe />);
                break;
            case "Favorites":
                setCurrentView(<Favorites />);
                break;
            default:
                setCurrentView(<Home />);
                break;
        }
    }, [navbarElement]);

    return { currentView };
}
