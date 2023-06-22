import { useNavigate } from "react-router"
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";

import home from "./home.module.css"
export const Home=()=>{
    const navigate=useNavigate();
    const {isLogin}=useAuth();
    useEffect(()=>{
        document.title="Chatster | Home";
        isLogin && navigate('/home')
    },[isLogin,navigate])
   
    return <>
     <div className={home.content}> Home here</div>
    </>
}