import { useState } from "react";
import Assignment from "./assignment.jsx";
import folderIcon from "../assets/folder_icon.svg";
import pencilIcon from "../assets/pencil_icon.svg";

import "../webpages/RModules.css"

function Folder({folder, assignments = [], onEdit, onEditAssignment}) {
  const [open, setOpen] = useState(false);
  const [checked, setCheck] = useState(false);

  return (
    <div className="folderHolder">
      <div className="folder">

        {/* LEFT SIDE */}
        <div className="folderOptions">
          
          {/* Dropdown arrow */}
          <button
            className="dropdownBtn"
            onClick={() => setOpen(!open)}
          >
            {open ? "▼" : "▶"}
          </button>

          {/* Icon + title */}
          <div className="folderInfo">
            <img src={folderIcon} alt="folder" className="folderIcon" />
            <p className="folderTitle">{folder.title}</p>
          </div>

          {/* Edit button */}
          <button className="editBtn">
            <img src={pencilIcon} alt="edit" onClick={() => onEdit(folder)} />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <button className="checkBtn" onClick={() => setCheck(!checked)}>
          {checked ? "X" : ""}
        </button>
      </div>

      {/* DROPDOWN CONTENT */}
      {open && (
        <div className="assignments">
          {assignments.map(assignment => (
            <Assignment key={assignment.id} assignment={assignment} onEdit={onEditAssignment}> </Assignment>
          ))}
        </div>
      )}
    </div>
  );
}

export default Folder;