import { useParams,useNavigate } from "react-router"
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../../services/userService";
export const UserPage=()=>{
    const [currentUser,setCurrentUser]=useState(null)
    const navigate=useNavigate();
    const {isLogin}=useAuth();
    const {user}=useParams();
    useEffect(()=>{
        if(isLogin){
            (async()=>{
                try{
                    const response=await getUser(user);
                    if(response?.status===200){
                        setCurrentUser(response?.data?.user)
                    }
                    else throw response;
                }
                catch(e){
                    console.error(e);
                }
            })()
        }
    },[isLogin,navigate,user])
console.log(currentUser)
    return <>{user}</>
}