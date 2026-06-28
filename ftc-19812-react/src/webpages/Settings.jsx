import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import "./Settings.css"



function Settings() {
    const [user, setUser] = useState(null)
    // const navigate = useNavigate();

    useEffect(() => {
        async function getUser() {
            const {data:{user}} = await supabase.auth.getUser();
            setUser(user);
        }
        getUser();
    }, []);

    

    
    
    async function handleLogout() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error(error);
            return;
        }

        window.location.replace("/");
        // navigate("/signin"); // if you're using React Router
    }

    


    return (
        (<div className="settingspage">
            <h1>Settings</h1>
            
            {user != null && 
            (<div>
                <button onClick={() => handleLogout()} className="settingslogoutButton">
                    Log Out
                </button>
            </div>)}
            
            

        </div>
        )
    )
}

export default Settings