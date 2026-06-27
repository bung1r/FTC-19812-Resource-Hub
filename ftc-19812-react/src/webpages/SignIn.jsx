import { supabase } from "../lib/supabase"


function SignInPage() {

    async function signInWithGoogle() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
        });

        if (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1> Sign In! </h1>
            <h2> 
                If you don't have a FTC 19812/23796 organization email account, signing in won't give you that much. <br/>
                All major FTC resources are accessible without sign in. 
             </h2>
            <div style={{padding:"20px"}}> </div>

            <div style={{alignItems:"center", justifyContent:"center", margin:"0 auto"}}>
                <button onClick={() => signInWithGoogle()}>
                    Sign in with Google
                </button>
            </div>

        </>
    )
}

export default SignInPage