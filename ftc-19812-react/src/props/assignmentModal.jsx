function AssignmentModal({onClose, onConfirm, setTitle, setType, setDesc, setOrder}) {
    return(
        <div className="overlay" onClick={onClose}>
                            
            <div className="folderModal" onClick={(e) => e.stopPropagation()}>
                
                <h2>Add Assignment</h2>

                <div className="editFieldContainer">
                    <div className="editField">
                        <p>Title: </p>
                        <input placeholder="Assignment name" onChange={(e) => setTitle(e.target.value)}/>
                    </div>

                    <div className="editField">
                        <p>Type: </p>
                        <input placeholder="video, docs, slideshow" onChange={(e) => setType(e.target.value)}/>

                    </div> 
                    
                    <div className="editField">
                        <p> Desc: </p>
                        <input placeholder="Brief description" onChange={(e) => setDesc(e.target.value)}/>
                        
                    </div> 

                    <div className="editField">
                        <p> Order: </p>
                        <input placeholder="Order index" onChange={(e) => setOrder(e.target.value)}/>
                        
                    </div> 
                </div>

                <div style={{display:"flex", justifyContent:"space-around", width:"70%", margin:"0 auto", marginTop:"6px"}}>
                    <button onClick={onConfirm}> Add Assignment </button>
                </div>
            </div>

        </div>
    )
}

export default AssignmentModal;