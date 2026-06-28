import { useRef, useState} from "react";
import { updateDatabaseComplex, checkFromDatabase } from "../api/databaseHelpers";

import "../webpages/Admin.css"

function AdminUserEdit({user}) {

    const [role, setRole] = useState(user.role);
    const [userData, setUser] = useState(user);

    const inputRef = useRef();

    async function changeRole() {
        
        if (role != null && userData.role != "owner" && (role === "member" || role === "admin" || role === "guest")) {
            inputRef.current.value = role;
            await updateDatabaseComplex("Users", {"role":role}, "user_id", userData.user_id)
            const {data} = await checkFromDatabase("Users", "user_id", userData.user_id);
            setUser(data);
        } else {
            inputRef.current.value = userData.role;
        }
    }

    return <div className="adminUserEdit">
        <div className="adminUserEditName">
            <p> {userData.name}</p>
            <p> {userData.email} </p>
        </div>
        <div>
            
            <input ref={inputRef} className="adminUserEditRoleInput" defaultValue={userData.role} placeholder="owner, member, admin, or guest" onChange={(e) =>
            {
                setRole(e.target.value);
            }}></input>
            <button onClick={async() => changeRole()}>
                Confirm
            </button>
        </div>
    </div>
}

export default AdminUserEdit;