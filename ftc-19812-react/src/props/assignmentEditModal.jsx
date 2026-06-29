import { useState } from "react";
function AssignmentEditModal({assignment, onClose, onUpdateTitle, onUpdateType, onUpdateDesc, onUpdateOrder, onUpdateContent, onUpdateLink, onDetailedView, onDelete}) {

    const [title, setTitle] = useState(assignment.title);
    const [type, setType] = useState(assignment.type);
    const [desc, setDesc] = useState(assignment.description);
    const [order, setOrder] = useState(assignment.order);
    const [link, setLink] = useState(assignment.link);
    const [content, setContent] = useState(assignment.content);

    return (
        <div className="overlay" onClick={onClose}>
                            
            <div className="folderModal" onClick={(e) => e.stopPropagation()}>
            <h2>Edit "{assignment.title}"</h2>
            <div className="editFieldContainer">
                <div className="editField">
                    <p>Title: </p>
                    <input placeholder="Folder name" defaultValue={assignment.title} onChange={(e) => setTitle(e.target.value)}/>
                    <button onClick={() => onUpdateTitle(title)}>Confirm</button>
                </div>

                <div className="editField">
                    <p>Type: </p>
                    <input placeholder="video, docs, slideshow" defaultValue={assignment.type} onChange={(e) => setType(e.target.value)}/>
                    <button onClick={() => onUpdateType(type)}>Confirm</button>
                </div> 
                
                <div className="editField">
                    <p> Brief Desc: </p>
                    <input placeholder="Brief description" defaultValue={assignment.description} onChange={(e) => setDesc(e.target.value)}/>
                    <button onClick={() => onUpdateDesc(desc)}>Confirm</button>
                </div> 

                <div className="editField">
                    <p> Order: </p>
                    <input placeholder="Order index" defaultValue={assignment.order} onChange={(e) => setOrder(e.target.value)}/>
                    <button onClick={() => onUpdateOrder(order)}>Confirm</button>
                </div> 

                {onUpdateContent != null && (
                <div className="editField">
                    <p> Content: </p>
                    <input placeholder="Content Text" defaultValue={assignment.content} onChange={(e) => setContent(e.target.value)}/>
                    <button onClick={() => onUpdateContent(content)}>Confirm</button>
                </div> 
                )}

                {onUpdateLink != null && (
                <div className="editField">
                    <p> Embed: </p>
                    <input placeholder="Embed Link" defaultValue={assignment.link} onChange={(e) => setLink(e.target.value)}/>
                    <button onClick={() => onUpdateLink(link)}>Confirm</button>
                </div> 
                )} 


            </div>

            <div style={{display:"flex", justifyContent:"space-around", width:"90%", margin:"0 auto", marginTop:"6px"}}>
                
                {onDetailedView != null && (
                <button onClick={onDetailedView}>
                    Go to Detailed View
                </button>
                )}
                
                {onDelete != null && (
                <button onClick={onDelete}>
                    Delete Assignment
                </button>
                )}

                
            </div>

            </div>

        </div>
    );
}

export default AssignmentEditModal;