// import { useState } from "react"
// import folderIcon from "../assets/folder_icon.svg"
// import pencilIcon from "../assets/pencil_icon.svg"
import Folder from "../props/folder.jsx"
import "./RModules.css"
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"

import {addToDatabase, removeFromDatabase, updateDatabase } from "../api/databaseHelpers.js";

function RModules() {

        const [folderData, setFolderData] = useState([])
        const [assignmentData, setAssignmentData] = useState([])

        const [folderModal, setFolderModal] = useState(false);
        const [editFolderModal, setEditFolderModal] = useState(false);
        const [selectedFolder, setSelectedFolder] = useState(null);


        const [assignmentModal, setAssignmentModal] = useState(false);
        const [editAssignmentModal, setEditAssignmentModal] = useState(false);
        const [selectedAssignment, setSelectedAssignment] = useState(null);

        const [tempTitle, setTempTitle] = useState("");
        const [tempType, setTempType] = useState("");
        const [tempDesc, setTempDesc] = useState("");
        const [tempOrder, setTempOrder] = useState(0);

        
        // const [assignmentModal, setAssignmentModal] = useState(false);

        useEffect(() => {
            async function fetchData() {
                const {data:fData} = await supabase.from("Folders").select("*").order("order", {ascending:true});
                const {data:aData} = await supabase.from("Assignments").select("*").order("order", {ascending:true});
                
                setFolderData(fData || []);
                setAssignmentData(aData || []);
            }

            fetchData();
        }, []);

        async function fetchData() {
            const {data:fData} = await supabase.from("Folders").select("*").order("order", {ascending:true});
            const {data:aData} = await supabase.from("Assignments").select("*").order("order", {ascending:true});
            
            setFolderData(fData || []);
            setAssignmentData(aData || []);
        }
    

        return (
            (<>
                <div className="moduleTitleDiv">
                    <h1></h1>
                    <h1>Modules</h1>
                    <button className="addFolder" onClick={() => {setFolderModal(true); setTempTitle("Default"); setTempOrder(0)}}>
                        +
                    </button>
                </div>
                
                <div className="moduleHolder">
                    {folderData.map(folder => (
                        <Folder  
                            key={folder.id} 
                            folder={folder} 
                            assignments={assignmentData.filter(a => a.folder_id === folder.id)}
                            onEdit={(folder) => {
                                setSelectedFolder(folder);
                                setFolderModal(false);
                                setEditFolderModal(true);
                                setTempTitle(folder.title);
                                setTempOrder(folder.order);
                                setTempType("");
                                setTempDesc("");
                            }}
                            onEditAssignment={(assignment) => {
                                setSelectedAssignment(assignment);
                                setAssignmentModal(false);
                                setEditAssignmentModal(true);
                                setTempTitle(assignment.title);
                                setTempOrder(assignment.order);
                                setTempType(assignment.type);
                                setTempDesc(assignment.description);
                            }}
                        >  </Folder>
                    ))}
                </div>

                {folderModal && (
                    <div className="overlay" onClick={() => setFolderModal(false)}>
                        
                        <div className="folderModal" onClick={(e) => e.stopPropagation()}>
                        <h2>Add Folder</h2>
                        
                        <div className="editFieldContainer">
                            <div className="editField">
                                <p>Title: </p>
                                <input placeholder="Folder title" defaultValue={"Default"} onChange={(e) => setTempTitle(e.target.value)}/>
                            </div>

                            <div className="editField">
                                <p>Order: </p>
                                <input placeholder="Order index" defaultValue={0} onChange={(e) => setTempOrder(e.target.value)}/>
                            </div>
                        </div>

                        <button onClick={async () => {await addToDatabase("Folders", {"title":tempTitle, "order":tempOrder}); setFolderModal(false); fetchData();}}>Confirm</button>
                        
                        </div>

                    </div>
                )}

                {editFolderModal && (
                    <div className="overlay" onClick={() => setEditFolderModal(false)}>
                        
                        <div className="folderModal" onClick={(e) => e.stopPropagation()}>
                            <h2>Edit "{selectedFolder.title}"</h2>
                            <div className="editFieldContainer">
                                <div className="editField">
                                    <p>Title: </p>
                                    <input placeholder="Folder title" defaultValue={selectedFolder.title} onChange={(e) => setTempTitle(e.target.value)}/>
                                    <button onClick={async () => {await updateDatabase("Folders", "title", tempTitle, selectedFolder.id); fetchData();}}>Confirm</button>
                                </div>

                                <div className="editField">
                                    <p>Order: </p>
                                    <input placeholder="Order index" defaultValue={selectedFolder.order} onChange={(e) => setTempOrder(e.target.value)}/>
                                    <button onClick={async () => {await updateDatabase("Folders", "order", tempOrder, selectedFolder.id); fetchData();}}>Confirm</button>
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-around", width:"70%", margin:"0 auto", marginTop:"6px"}}>
                                <button onClick={() => 
                                    {setEditFolderModal(false); 
                                    setAssignmentModal(true);
                                    setTempDesc("Default Desc");
                                    setTempOrder("0");
                                    setTempTitle("Default");
                                    setTempType("slideshow")
                                    }}> Add Assignment </button>
                                <button onClick={async () => {await removeFromDatabase("Folders", selectedFolder.id); fetchData(); setEditFolderModal(false);}}> Delete Folder </button>
                            </div>
                            
             
                        </div>

                    </div>
                )}

                {assignmentModal && (
                    <div className="overlay" onClick={() => setAssignmentModal(false)}>
                        
                        <div className="folderModal" onClick={(e) => e.stopPropagation()}>
                            
                            <h2>Add Assignment</h2>

                            <div className="editFieldContainer">
                                <div className="editField">
                                    <p>Title: </p>
                                    <input placeholder="Folder name" defaultValue={tempTitle} onChange={(e) => setTempTitle(e.target.value)}/>
                                </div>

                                <div className="editField">
                                    <p>Type: </p>
                                    <input placeholder="video, docs, slideshow" defaultValue={tempType} onChange={(e) => setTempType(e.target.value)}/>

                                </div> 
                                
                                <div className="editField">
                                    <p> Brief Desc: </p>
                                    <input placeholder="Brief description" defaultValue={tempDesc} onChange={(e) => setTempDesc(e.target.value)}/>
                                    
                                </div> 

                                <div className="editField">
                                    <p> Order: </p>
                                    <input placeholder="Order index" defaultValue={tempOrder} onChange={(e) => setTempOrder(e.target.value)}/>
                                    
                                </div> 
                            </div>

                            <div style={{display:"flex", justifyContent:"space-around", width:"70%", margin:"0 auto", marginTop:"6px"}}>
                                <button onClick={async () => {await addToDatabase("Assignments", {"title":tempTitle, "order":tempOrder, "description":tempDesc, "type":tempType, "folder_id":selectedFolder.id}); setAssignmentModal(false); fetchData();}}> Add Assignment </button>
                            </div>
                        </div>

                    </div>
                )}

                {editAssignmentModal && (
                    <div className="overlay" onClick={() => setEditAssignmentModal(false)}>
                        
                        <div className="folderModal" onClick={(e) => e.stopPropagation()}>
                        <h2>Edit "{selectedAssignment.title}"</h2>
                        <div className="editFieldContainer">
                            <div className="editField">
                                <p>Title: </p>
                                <input placeholder="Folder name" defaultValue={selectedAssignment.title} onChange={(e) => setTempTitle(e.target.value)}/>
                                <button onClick={async () => {await updateDatabase("Assignments", "title", tempTitle, selectedAssignment.id); fetchData();}}>Confirm</button>
                            </div>

                            <div className="editField">
                                <p>Type: </p>
                                <input placeholder="video, docs, slideshow" defaultValue={selectedAssignment.type} onChange={(e) => setTempType(e.target.value)}/>
                                <button onClick={async () => {await updateDatabase("Assignments", "type", tempType, selectedAssignment.id); fetchData();}}>Confirm</button>
                            </div> 
                            
                            <div className="editField">
                                <p> Brief Desc: </p>
                                <input placeholder="Brief description" defaultValue={selectedAssignment.description} onChange={(e) => setTempDesc(e.target.value)}/>
                                <button onClick={async () => {await updateDatabase("Assignments", "description", tempDesc, selectedAssignment.id); fetchData();}}>Confirm</button>
                            </div> 

                            <div className="editField">
                                <p> Order: </p>
                                <input placeholder="Order index" defaultValue={selectedAssignment.order} onChange={(e) => setTempOrder(e.target.value)}/>
                                <button onClick={async () => {await updateDatabase("Assignments", "order", tempOrder, selectedAssignment.id); fetchData();}}>Confirm</button>
                            </div> 


                        </div>

                        <div style={{display:"flex", justifyContent:"space-around", width:"90%", margin:"0 auto", marginTop:"6px"}}>
                            
                            <button>
                                Go to Detailed View
                            </button>
                            <button>
                                Delete Assignment
                            </button>
                        </div>
   
                        </div>

                    </div>
                )}
                
            </>)

            
        )
}

export default RModules