import { useContext } from "react";
import { NavbarContext } from "../../Context/NavbarContext";
import { NavbarContextType } from "../../Types/Context/NavbarContextTypes";

const Navbar = () => {
    const { navbarElement, changeNavbarItem } = useContext(NavbarContext) as NavbarContextType;

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Recipe Base
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        navbarElement === "Home" ? "active" : ""
                                    }`}
                                    href="#"
                                    onClick={() => changeNavbarItem("Home")}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        navbarElement === "RecipeList" ? "active" : ""
                                    }`}
                                    href="#"
                                    onClick={() => changeNavbarItem("RecipeList")}
                                >
                                    Recipe List
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        navbarElement === "AddRecipe" ? "active" : ""
                                    }`}
                                    href="#"
                                    onClick={() => changeNavbarItem("AddRecipe")}
                                >
                                    Add Recipe
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${
                                        navbarElement === "Favorites" ? "active" : ""
                                    }`}
                                    href="#"
                                    onClick={() => changeNavbarItem("Favorites")}
                                >
                                    Favorites
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
