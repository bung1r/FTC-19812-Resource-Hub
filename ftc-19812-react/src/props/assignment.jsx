import { useState } from "react";
import { supabase } from "../lib/supabase";
// import folderIcon from "../assets/folder_icon.svg";
import pencilIcon from "../assets/pencil_icon.svg";
import documentationIcon from "../assets/documentation_icon.svg";
import videoIcon from "../assets/video_icon.svg";
import slideshowIcon from "../assets/slideshow_icon.svg";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "../webpages/RModules.css"

function Assignment({assignment, onEdit, user}) {

    const navigate = useNavigate();
    const [checked, setCheck] = useState(false);


    // Fetch the completed/not completed data if logged in 
    useEffect(() => {
        async function fetchData() {
            console.log(user.id);
            console.log(assignment.id);
            
            if (user != null) {
                const {data, error} = await supabase.from("AssignmentProgress")
                    .select("*")
                    .eq("user_id", user.id)
                    .eq("assignment_id", assignment.id)
                    .maybeSingle();
                console.log(data);
                console.log(error);
                if (data == null) {
                    setCheck(false);
                } else {
                    setCheck(true);
                }
            } else {
                setCheck(false);
            }
            
        }

        fetchData();
    }, []);

    async function changeCompletion() {
        setCheck(!checked); // not that checked is NOT set right away, for some dumb reason 
        
        if (!checked) {
            await supabase.from("AssignmentProgress").insert({user_id:user.id, assignment_id:assignment.id});
        } else {
            await supabase.from("AssignmentProgress").delete().eq("user_id", user.id).eq("assignment_id", assignment.id);
        }
    }

    return (
        <div className="assignment" style={{borderLeft: "4px solid", borderLeftColor:"white", backgroundColor:"rgb(52, 56, 86)"}}>
            {/* LEFT SIDE */}
            <div className="folderOptions">

                {/* Icon + title */}
                <div className="folderInfo">
                <img src={assignment.type === "documentation" ? documentationIcon : assignment.type === "video" ? videoIcon : assignment.type === "slideshow" ? slideshowIcon : videoIcon} alt="folder" className="folderIcon" />
                <p className="assignmentTitle" onClick={() => {navigate(`../assignments/${assignment.id}`)}}>{assignment.title}</p>
                </div>
    
                {/* Edit button */}
                <button className="editBtn" onClick={() => onEdit(assignment)}>
                <img src={pencilIcon} alt="edit" />
                </button>
            </div>
    
            {/* RIGHT SIDE */}
            <button className="checkBtn" onClick={async () => 
                {   
                    changeCompletion();
                }}>
                {checked ? "X" : ""}
            </button>
        </div>

    )
}

export default Assignment