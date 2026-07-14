import softwareIcon from "../assets/software_icon.svg";
import hardwareIcon from "../assets/hardware_icon.svg";
import modulesIcon from "../assets/modules_icon.svg";
import otherIcon from "../assets/other_icon.svg";

import {useNavigate } from "react-router-dom";

import "./Resources.css"

function Resources() {
    const navigate = useNavigate();

    return (
        (<>
            <h1>Resources Page</h1>
            <div className="buttonPairDiv">
                <button className="detailedButton" onClick={() => navigate("/resources/modules")}>
                    <img src={modulesIcon} alt="modules_icon" className="buttonIcon"/>
                    <div>
                        <h2> Modules </h2>
                        <p className="descParagraph"> 
                            Learning Resources in an easy-to-use and structured format!
                            Don't have learning materials for your team? Just use this! 
                            (Note: Only a software module exists at the moment)
                        </p>
                    </div>
                </button>
                <button className="detailedButton" onClick={() => navigate("/resources/software")}> 
                    <img src={softwareIcon} alt="software_icon" className="buttonIcon"/>
                    <div>
                        <h2> Software </h2>
                        <p className="descParagraph"> 
                            A collection of software resources! Broadly structured, with lots
                            of online documentation and such.
                        </p>
                    </div>
                   
                </button>
            </div>
            <div className="buttonPairDiv">
                <button className="detailedButton" onClick={() => navigate("/resources/hardware")}> 
                    <img src={hardwareIcon} alt="hardware_icon" className="buttonIcon"/>
                    <div>
                        <h2> Hardware</h2>  
                        <p className="descParagraph"> 
                            A collection of hardware resources! Includes places to purchase hardware items, 
                            hardware guides, and electrical stuff as well.
                        </p>  
                    </div>
                </button>
                <button className="detailedButton" onClick={() => navigate("/resources/other")}>
                    <img src={otherIcon} alt="other_icon" className="buttonIcon"/>
                    <div>
                        <h2> Other </h2>
                        <p className="descParagraph"> 
                            Contains resources not found in the other 3 categories. This includes strategies, 
                            general info about the game, and other knick-knacks.
                        </p>
                    </div>
                    
                </button>
            </div>
        </>)
    )
}

export default Resources