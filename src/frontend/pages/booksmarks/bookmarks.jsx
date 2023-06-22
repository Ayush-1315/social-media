import { useNavigate } from "react-router"
import { useEffect } from "react"

import { useAuth } from "../../context/authContext"
export const BookmarksPage=()=>{
    const {isLogin}=useAuth();
    const navigate=useNavigate();
    useEffect(()=>{
        document.title="Chatster | Bookmarks";
        isLogin && navigate('/bookmarks')
    },[isLogin,navigate])
    return <>Bookmarks Here</>
}