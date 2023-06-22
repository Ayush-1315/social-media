import { useParams,useNavigate } from "react-router"
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
export const UserPage=()=>{
    const navigate=useNavigate();
    const {isLogin}=useAuth();
    const {user}=useParams();
    useEffect(()=>{
        document.title=`Chatster | ${user[0].toUpperCase()+user.slice(1)}`;
        isLogin && navigate(`/user/${user}`)
    },[isLogin,navigate,user])
   
    return <>{user}</>
}