import { createContext,useContext } from "react";
import { useAuth } from "./authContext";
import { editPostService } from "../services/postsService";
import { useUser } from "./userContext";
const PostContext=createContext();
export const PostProvider=({children})=>{
const {encodedToken} =useAuth()
const {setUsersFeed} =useUser();
    const editPost=async(postId,postData)=>{
        try{
            const response=await editPostService(postId,{content:{...postData}},encodedToken);
            console.log(response)
            if(response?.status===201){
                setUsersFeed(response?.data?.posts)
            }
        }
        catch(e){
            console.log(e)
        }
}
    return <PostContext.Provider value={{editPost}}>
        {children}
    </PostContext.Provider>
}
export const usePost=()=>useContext(PostContext);