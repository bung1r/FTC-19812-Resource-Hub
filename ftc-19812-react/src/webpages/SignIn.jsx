import { GoogleLogin } from '@react-oauth/google';

function SignInPage() {
    return (
        <>
            <h1> Sign In! </h1>
            <h2> 
                If you don't have a FTC 19812/23796 organization email account, signing in won't give you that much. <br/>
                All major FTC resources are accessible without sign in. 
             </h2>
            <div style={{padding:"20px"}}> </div>

            <div style={{alignItems:"center", justifyContent:"center", margin:"0 auto"}}>
                <GoogleLogin 
                onSuccess={(response) => {console.log(response)}}
                onSuccess= {() => {console.log("Login FAILED!! How dare?")}}
                />
            </div>

        </>
    )
}

export default SignInPage