import Navbar from "../../Components/Navbar/Navbar";
import useApp from "./useApp";
import "./App.css";

export default function App() {
    const { currentView } = useApp();
    return (
        <div className="appMainContainer">
            <Navbar />
            <div className="contentContainer">{currentView}</div>
        </div>
    );
}
