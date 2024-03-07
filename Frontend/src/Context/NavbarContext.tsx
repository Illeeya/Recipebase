import { createContext, useState } from "react";
import { NavbarContextType } from "../Types/Context/NavbarContextTypes";

export const NavbarContext = createContext<NavbarContextType | null>(null);

const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [navbarElement, setNavbarElement] = useState<string>("Home");

    const changeNavbarItem = (navbarItem: string) => {
        setNavbarElement(navbarItem);
    };

    return (
        <NavbarContext.Provider value={{ navbarElement, changeNavbarItem }}>
            {children}
        </NavbarContext.Provider>
    );
};

export default NavbarProvider;
