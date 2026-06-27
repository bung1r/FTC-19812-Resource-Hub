import { useState } from "react";

import "./dropdown.css"

function Dropdown({question, answer}) {

    const [open, setOpen] = useState(false);

    return (
        <div className="dropdownParent">
            <div className="dropdown">
                {/* Left Side */}
                <div className="leftside">
                    <button onClick={() => {setOpen(!open)}}> {open ? "▼" : "▶"} </button>
                    <h2> {question} </h2>
                </div>
            </div>  

            {open && (
                <div className="answer">
                    <p>
                        {answer}
                    </p>
                </div>
            )}
        </div>
        
    );
}

export default Dropdown;