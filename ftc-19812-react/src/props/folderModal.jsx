function FolderModal({onClose, onConfirm, setTitle, setOrder}) {
    return (
        <div className="overlay" onClick={onClose}>
                            
            <div className="folderModal" onClick={(e) => e.stopPropagation()}>
            <h2>Add Folder</h2>
            
            <div className="editFieldContainer">
                <div className="editField">
                    <p>Title: </p>
                    <input placeholder="Folder title" defaultValue={"Default"} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div className="editField">
                    <p>Order: </p>
                    <input placeholder="Order index" defaultValue={0} onChange={(e) => setOrder(e.target.value)}/>
                </div>
            </div>

            <button onClick={onConfirm}>Confirm</button>
            
            </div>

        </div>
    );
}

export default FolderModal;