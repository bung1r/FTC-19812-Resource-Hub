import { useState } from "react";

function FolderEditModal({
  folder,
  onClose,
  onUpdateTitle,
  onUpdateOrder,
  onDelete,
  onAddAssignment,
}) {
        const [title, setTitle] = useState(folder.title);
        const [order, setOrder] = useState(folder.order);

        return (
            <div className="overlay" onClick={onClose}>
                <div className="folderModal" onClick={(e) => e.stopPropagation()}>
                    <h2>Edit "{folder.title}"</h2>

                    <div className="editFieldContainer">
                        <div className="editField">
                            <p>Title:</p>
                            <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            />
                            <button onClick={() => onUpdateTitle(title)}>
                            Confirm
                            </button>
                        </div>

                        <div className="editField">
                            <p>Order:</p>
                            <input
                            value={order}
                            onChange={(e) => setOrder(e.target.value)}
                            />
                            <button onClick={() => onUpdateOrder(order)}>
                            Confirm
                            </button>
                        </div>
                    </div>

                    <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "70%",
                        margin: "0 auto",
                        marginTop: "6px",
                    }}
                    >
                        <button onClick={onAddAssignment}>
                            Add Assignment
                        </button>

                        <button onClick={onDelete}>
                            Delete Folder
                        </button>
                    </div>
                </div>
            </div>
        );
}

export default FolderEditModal;