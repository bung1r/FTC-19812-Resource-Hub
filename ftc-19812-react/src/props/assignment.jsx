import { useState } from "react";
// import folderIcon from "../assets/folder_icon.svg";
import pencilIcon from "../assets/pencil_icon.svg";
import documentationIcon from "../assets/documentation_icon.svg";
import videoIcon from "../assets/video_icon.svg";
import slideshowIcon from "../assets/slideshow_icon.svg";

import "../webpages/RModules.css"

function Assignment({assignment, onEdit}) {
    const [checked, setCheck] = useState(false);

    return (
        <div className="assignment" style={{borderLeft: "4px solid", borderLeftColor:"white", backgroundColor:"rgb(52, 56, 86)"}}>
            {/* LEFT SIDE */}
            <div className="folderOptions">

                {/* Icon + title */}
                <div className="folderInfo">
                <img src={assignment.type === "documentation" ? documentationIcon : assignment.type === "video" ? videoIcon : assignment.type === "slideshow" ? slideshowIcon : videoIcon} alt="folder" className="folderIcon" />
                <p className="folderTitle">{assignment.title}</p>
                </div>
    
                {/* Edit button */}
                <button className="editBtn" onClick={() => onEdit(assignment)}>
                <img src={pencilIcon} alt="edit" />
                </button>
            </div>
    
            {/* RIGHT SIDE */}
            <button className="checkBtn" onClick={() => setCheck(!checked)}>
                {checked ? "X" : ""}
            </button>
        </div>

    )
}

export default Assignment