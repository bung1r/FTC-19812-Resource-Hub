import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AssignmentEditModal from "./assignmentEditModal.jsx";
import pencilIcon from "../assets/pencil_icon.svg";
import documentationIcon from "../assets/documentation_icon.svg";
import videoIcon from "../assets/video_icon.svg";
import slideshowIcon from "../assets/slideshow_icon.svg";
import {removeFromDatabase, updateDatabase } from "../api/databaseHelpers.js";

import "../webpages/RModules.css"

function AssignmentPage() {

    const {id} = useParams();
    const [assignment, setAssignment] = useState(null);
    const [assignmentModal, setAssignmentModal] = useState(false);

    // const [tempTitle, setTempTitle] = useState("");
    // const [tempType, setTempType] = useState("");
    // const [tempDesc, setTempDesc] = useState("");
    // const [tempOrder, setTempOrder] = useState(0);
    // const [tempLink, setTempLink] = useState("");
    // const [tempContent, setTempContent] = useState("");

    useEffect(() => {
        async function fetchAssignment() {
        const { data, error } = await supabase
            .from("Assignments")
            .select("*")
            .eq("id", id)
            .single();

            if (error) {
                console.error(error);
            } else {
                setAssignment(data);
            }
        }
        fetchAssignment();
    }, [id]);


    async function fetchAssignment() {
        const { data, error } = await supabase
        .from("Assignments")
        .select("*")
        .eq("id", id)
        .single();

        if (error) {
            console.error(error);
        } else {
            setAssignment(data);
        }
    }

    function loadEmbed() {
        if (assignment.type == "documentation") {
            return <div style={{aspectRatio:"0.77", width:"100%", maxWidth:"100%"}}>
                <iframe
                    src={assignment.link} 
                    frameborder="0" 
                    allowfullscreen="true" 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true"
                    style={{ width: "90%", height: "90%", border: "none" }}
                    allowFullScreen
                    title="Docs"
                    backgroundColor="rgb(0,0,0)"
                > </iframe>
            </div>;
        } else if (assignment.type == "video") {
            return <div style={{aspectRatio:"16/9", width:"100%", maxWidth:"100%"}}>
                <iframe
                    src={assignment.link} 
                    frameborder="0" 
                    allowfullscreen="true" 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true"
                    style={{ width: "90%", height: "90%", border: "none" }}
                    allowFullScreen
                    title="Youtube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                    backgroundColor="rgb(0,0,0)"
                > </iframe>
            </div>;
        } else if (assignment.type == "slideshow") {
            return <div style={{aspectRatio:"16/9", width:"100%", maxWidth:"100%"}}>
                <iframe 
                    src={assignment.link} 
                    frameborder="0" 
                    allowfullscreen="true" 
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true"
                    style={{ width: "90%", height: "90%", border: "none" }}
                    allowFullScreen
                    title="Slides"
                    backgroundColor="rgb(0,0,0)"
                ></iframe>
            </div>
        } else {
            return <div style={{width:"100%", maxWidth:"100%"}}>

            </div>;
        }
    }
    
    if (assignment == null) return <div>Loading...</div>;

    return <div>
        
        
        <div className="assignmentContentTitle">
            <button className="assignmentContentType"> 
                <img src=
                    {assignment.type === "documentation" ? documentationIcon : 
                    assignment.type === "video" ? videoIcon : 
                    assignment.type === "slideshow" ? slideshowIcon : 
                    slideshowIcon}/>
            </button>
            <h1> {assignment.title} </h1>
            <button className="assignmentContentEditBtn" onClick={() => {setAssignmentModal(true)}}> <img src={pencilIcon} alt="edit"/> </button>
        </div>

        
        <div style={{backgroundColor:"rgb(255,255,255)", height:"2px", width:"95%", margin:"0 auto", marginBottom:"8px"}}> </div>
        
        <div className="assignmentContentBG"> 
            <div>
                <h2> {assignment.description} </h2>
            </div>
            <div>
                <p> {assignment.content} </p>
            </div>

            {/* This is the embed that will be here! It could either be a google doc, slideshow, youtube video, or nothing! Yippeee!!!!*/}
            {loadEmbed()}
        </div>

        <div className="assignmentContentFooter">
            <button>
                Back to Module Page
            </button>
            <button>
                Mark as Completed
            </button>
            <button>
                Next Assignment 
            </button>
        </div>

        <div style={{height:"2px", width:"95%", margin:"0 auto", marginBottom:"8px"}}> </div>
        
        {assignmentModal && (
            <AssignmentEditModal
            assignment={assignment}
            onClose={() => setAssignmentModal(false)}
            onUpdateTitle={async (val) => {await updateDatabase("Assignments", "title", val, assignment.id); fetchAssignment();}}
            onUpdateType={async (val) => {await updateDatabase("Assignments", "type", val, assignment.id); fetchAssignment();}}
            onUpdateDesc={async (val) => {await updateDatabase("Assignments", "description", val, assignment.id); fetchAssignment();}}
            onUpdateOrder={async (val) => {await updateDatabase("Assignments", "order", val, assignment.id); fetchAssignment();}}
            onUpdateContent={async (val) => {await updateDatabase("Assignments", "content", val, assignment.id); fetchAssignment();}}
            onUpdateLink={async (val) => {await updateDatabase("Assignments", "link", val, assignment.id); fetchAssignment();}}
          
            onDelete={async () => {await removeFromDatabase("Assignments", assignment.id); fetchAssignment(); setAssignmentModal(false);}}
            />

            // <div className="overlay" onClick={() => setAssignmentModal(false)}>
                
            //     <div className="folderModal" onClick={(e) => e.stopPropagation()}>
            //     <h2>Edit "{assignment.title}"</h2>
            //     <div className="editFieldContainer">
            //         <div className="editField">
            //             <p>Title: </p>
            //             <input placeholder="Folder name" defaultValue={assignment.title} onChange={(e) => setTempTitle(e.target.value)}/>
            //             <button onClick={async () => {await updateDatabase("Assignments", "title", tempTitle, assignment.id); fetchAssignment();}}>Confirm</button>
            //         </div>

            //         <div className="editField">
            //             <p>Type: </p>
            //             <input placeholder="video, docs, slideshow" defaultValue={assignment.type} onChange={(e) => setTempType(e.target.value)}/>
            //             <button onClick={async () => {await updateDatabase("Assignments", "type", tempType, assignment.id);fetchAssignment();}}>Confirm</button>
            //         </div> 
                    
            //         <div className="editField">
            //             <p> Brief Desc: </p>
            //             <input placeholder="Brief description" defaultValue={assignment.description} onChange={(e) => setTempDesc(e.target.value)}/>
            //             <button onClick={async () => {await updateDatabase("Assignments", "description", tempDesc, assignment.id);fetchAssignment();}}>Confirm</button>
            //         </div> 

            //         <div className="editField">
            //             <p> Order: </p>
            //             <input placeholder="Order index" defaultValue={assignment.order} onChange={(e) => setTempOrder(e.target.value)}/>
            //             <button onClick={async () => {await updateDatabase("Assignments", "order", tempOrder, assignment.id);fetchAssignment();}}>Confirm</button>
            //         </div> 

            //         {/* Content Stuff (The thing udner the description) */}
            //         <div className="editField">
            //             <p> Content: </p>
            //             <input placeholder="Content Text" defaultValue={assignment.content} onChange={(e) => setTempContent(e.target.value)}/>
            //             <button onClick={async () => {await updateDatabase("Assignments", "content", tempContent, assignment.id);fetchAssignment();}}>Confirm</button>
            //         </div> 

            //         {/* Embed link */}
            //         <div className="editField">
            //             <p> Embed: </p>
            //             <input placeholder="Embed Link" defaultValue={assignment.link} onChange={(e) => setTempLink(e.target.value)}/>
            //             <button onClick={async () => {await updateDatabase("Assignments", "link", tempLink, assignment.id);fetchAssignment();}}>Confirm</button>
            //         </div> 
                    
                    


            //     </div>

            //     <div style={{display:"flex", justifyContent:"space-around", width:"90%", margin:"0 auto", marginTop:"6px"}}>

            //         <button onClick={async () => {await removeFromDatabase("Assignments", assignment.id); setAssignmentModal(false);}}>
            //             Delete Assignment
            //         </button>
            //     </div>

            //     </div>

            // </div>
        )} 

    </div>;

    
        
}


export default AssignmentPage;