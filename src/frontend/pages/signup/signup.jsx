import { useAuth } from "../../context/authContext";
// import { signupAuth } from "../../services/authService"

export const SignupPage=()=>{
    document.title="ChatsterGram | SignUp"
    const {createUser}=useAuth();
    const setUser=async()=>{
         createUser({
                email:'ayushraj1315',
                password:'1234',
                username:'ayush1315'
            });
      
    }
    return <>Signup Here
    <button onClick={()=>setUser()}>Test</button>
    </>
}