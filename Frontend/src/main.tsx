import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Views/0App/App";
import "./main.css";
import "./bootstrap.min.css";
import NavbarProvider from "./Context/NavbarContext";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavbarProvider>
            <App />
        </NavbarProvider>
    </React.StrictMode>
);
