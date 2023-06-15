import axios from "axios";

export const loginAuth=async({username,password})=>{
try{
    const response=await axios.post("/api/auth/login",{
        username,password
    });
    return(response);
}
catch(e)
{
   return e
}
}