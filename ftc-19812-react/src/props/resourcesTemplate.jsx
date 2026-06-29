// import { useState } from "react"
// import folderIcon from "../assets/folder_icon.svg"
// import pencilIcon from "../assets/pencil_icon.svg"
import Folder from "./folder.jsx"
import FolderModal from "./folderModal.jsx";
import FolderEditModal from "./folderEditModel.jsx";
import AssignmentModal from "./assignmentModal.jsx";
import AssignmentEditModal from "./assignmentEditModal.jsx";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase.js"
import { useNavigate } from "react-router-dom";



import {addToDatabase, removeFromDatabase, updateDatabase, checkFromDatabase } from "../api/databaseHelpers.js";

function ResourcesTemplate({title, section}) {

    const navigate = useNavigate();
    

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

    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null); // user data is the one with the roles. 

    
    
    // const [assignmentModal, setAssignmentModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const {data:fData} = await supabase.from("Folders").select("*").eq("section", section).order("order", {ascending:true});
            const {data:aData} = await supabase.from("Assignments").select("*").order("order", {ascending:true});
            const {data:{user}} = await supabase.auth.getUser();
            if (user != null) {
                const {data:singleUserData} = await checkFromDatabase("Users", "user_id", user.id);
                setUserData(singleUserData);
            }

            setFolderData(fData || []);
            setAssignmentData(aData || []);
            setUser(user);
            
        }

        fetchData();
    }, []);

    async function fetchData() {
        const {data:fData} = await supabase.from("Folders").select("*").eq("section", section).order("order", {ascending:true});
        const {data:aData} = await supabase.from("Assignments").select("*").order("order", {ascending:true});
        
        setFolderData(fData || []);
        setAssignmentData(aData || []);
    }

    function addFolderButtonDisplay() {
        if (userData != null && (userData.role === "owner" || userData.role === "admin")) {
            return <button className="addFolder" onClick={() => {setFolderModal(true); setTempTitle("Default"); setTempOrder(0)}}>
                    +
            </button>;
        } else {
            return <h1></h1>;
        }
    }

    return (
        (<>
            <div className="moduleTitleDiv">
                <h1></h1>
                <h1>{title}</h1>
                {addFolderButtonDisplay()}
            </div>
            
            <div className="moduleHolder">
                {folderData.map(folder => (
                    <Folder  
                        key={folder.id} 
                        folder={folder} 
                        assignments={assignmentData.filter(a => a.folder_id === folder.id)}
                        user={user}
                        userData={userData}
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
                <FolderModal 
                    onClose={() => setFolderModal(false)} 
                    setTitle={setTempTitle} 
                    setOrder={setTempOrder} 
                    onConfirm={async () => {await addToDatabase("Folders", {"title":tempTitle, "order":tempOrder, "section":section}); setFolderModal(false); fetchData();}}
                />
            )}

            {editFolderModal && (
            <FolderEditModal
                folder={selectedFolder}
                onClose={() => setEditFolderModal(false)}
                onUpdateTitle={async (val) => {
                await updateDatabase("Folders", "title", val, selectedFolder.id);
                fetchData();
                }}
                onUpdateOrder={async (val) => {
                await updateDatabase("Folders", "order", val, selectedFolder.id);
                fetchData();
                }}
                onDelete={async () => {
                await removeFromDatabase("Folders", selectedFolder.id);
                fetchData();
                setEditFolderModal(false);
                }}
                onAddAssignment={() => {
                setEditFolderModal(false);
                setAssignmentModal(true);
                setTempDesc("Default Desc");
                setTempOrder("0");
                setTempTitle("Default");
                setTempType("slideshow");
                }}
            />
            )}

            {assignmentModal && (
                <AssignmentModal
                 onClose={() => setAssignmentModal(false)}
                 onConfirm={async () => {await addToDatabase("Assignments", {"title":tempTitle, "order":tempOrder, "description":tempDesc, "type":tempType, "folder_id":selectedFolder.id}); setAssignmentModal(false); fetchData();}}
                 setTitle={setTempTitle}
                 setType={setTempType}
                 setDesc={setTempDesc}
                 setOrder={setTempOrder}
                />
            )}

            {editAssignmentModal && (
                <AssignmentEditModal
                assignment={selectedAssignment}
                onClose={() => setEditAssignmentModal(false)}
                onUpdateTitle={async (val) => {await updateDatabase("Assignments", "title", val, selectedAssignment.id); fetchData();}}
                onUpdateType={async (val) => {await updateDatabase("Assignments", "type", val, selectedAssignment.id); fetchData();}}
                onUpdateDesc={async (val) => {await updateDatabase("Assignments", "description", val, selectedAssignment.id); fetchData();}}
                onUpdateOrder={async (val) => {await updateDatabase("Assignments", "order", val, selectedAssignment.id); fetchData();}}
                onDetailedView={() => {navigate(`../assignments/${selectedAssignment.id}`); setEditAssignmentModal(false)}}
                onDelete={async () => {await removeFromDatabase("Assignments", selectedAssignment.id); fetchData(); setEditAssignmentModal(false);}}
                />

            )}
            
        </>)

        
    )
}

export default ResourcesTemplate