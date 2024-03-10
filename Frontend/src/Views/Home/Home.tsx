import logo from "../../Assets/Img/RecipeBaseWhite.png";
import "./Home.css";

export default function Home() {
    return (
        <div className="homeMainContainer">
            <img className="homeLogo" src={logo} alt="RecipeBase" />
            <div>
                <hr />
                <h2>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error asperiores
                    quos, maiores consequatur aliquid dolore id delectus adipisci recusandae
                    quam possimus assumenda! Nihil nam praesentium dignissimos, ut reiciendis
                    soluta omnis!
                </h2>
            </div>
        </div>
    );
}
