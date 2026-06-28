import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { checkFromDatabase } from "../api/databaseHelpers";
import AdminUserEdit from "../props/adminUserEdit";

import "./Admin.css"

function Admin() {
    const roleOrder = {
        owner: 0,
        admin: 1,
        member: 2,
    };

    const [user, setUser] = useState(null);
    const [search, setSearch] = useState(null);
    const [validUsers, setValidUsers] = useState([])

    useEffect(() => {
        async function getData() {
            const {data:{user}} = await supabase.auth.getUser();

            if (user != null) {
                const {data: singleUserData} = await checkFromDatabase("Users", "user_id", user.id);
                console.log(singleUserData)
                setUser(singleUserData);    
            }
            

            const {data} = await supabase.from("Users").select("*").in("role", ["admin", "owner", "member"]);
            data.sort((a, b) => roleOrder[a.role] - roleOrder[b.role])
            setValidUsers(data);
        }
        getData();
    }, []);

    async function searchUpUser() {
        for (var i = 0; i < validUsers.length; i++) {
            if (validUsers[i].email === search) return;
        }

        
        // console.log(search)
        const {data} = await checkFromDatabase("Users", "email", search);
        console.log(data);
        if (data != null) {
            setValidUsers(prev => [...prev, data])
        }
    }
    
    function displayPage() {
        if (user != null && (user.role === "admin" || user.role === "owner")) {
            return <div className="adminpage">
                <h1> Admin Page </h1>
                <h2> Where you can edit permissions, add limits, and do other stuff! Maybe.</h2>
                <p> Note: Only Owners, Admins, and Members can appear. To add a Guest to this list, insert their email and manually add them to the list.</p>

                <div className="adminmemberList">
                    <div className="adminmemberHeader">
                        <input placeholder="Insert email" onChange={(e) => setSearch(e.target.value)}/>
                        <button onClick={async () => {searchUpUser()}}> 
                            Confirm
                        </button>
                    </div>
                    {validUsers.map(user => (
                        <AdminUserEdit user={user}></AdminUserEdit>
                    ))

                    }
                    
                </div>
            </div>;
        } else {
            return <div>
                <h1> Access Denied </h1>
                <h2> You think you're sooo smart, don't you? </h2>
                <p> Or maybe you're just waiting for your credentials to validate. In that case, carry on, carry on...</p>
            </div>;
        }
    }

    return displayPage();
}

export default Admin;