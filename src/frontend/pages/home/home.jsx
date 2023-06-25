import { useNavigate } from "react-router"
import { useEffect} from "react";
import { useAuth } from "../../context/authContext";

import home from "./home.module.css"
import { CreatePost } from "../../components/createPost/createPost";
import { useUser } from "../../context/userContext";
import { PostCard } from "../../components/postCard/postCard";
export const Home=()=>{
    const navigate=useNavigate();
    const {isLogin}=useAuth();
    const {createNewPost,posts}=useUser();
    useEffect(()=>{
        document.title="Chatster | Home";
        isLogin && navigate('/home')
    },[isLogin,navigate])
   const onSubmitFun=(newPost)=>{
    createNewPost(newPost)
   }
    return <>
     <div className={home.content}> 
   <CreatePost user={isLogin} onSubmit={onSubmitFun}/>
    {posts.map((post,index)=><PostCard key={index} post={post}/>)}
     </div>
    </>
}