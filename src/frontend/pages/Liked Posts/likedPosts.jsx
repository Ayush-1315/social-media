import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
export const LikedPostPage=()=>{
    const navigate=useNavigate();
    const {isLogin}=useAuth();
    useEffect(()=>{
        document.title="Chatster | Liked";
        isLogin && navigate('/liked')
    },[isLogin,navigate])
   
    return <>Liked Posts Here</>
}