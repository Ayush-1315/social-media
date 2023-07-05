import { useParams,useNavigate } from "react-router"
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../../services/userService";
import { getUserPostsService } from "../../services/postsService";
import { ProfileCard } from "../../components/profileCard/profileCard";
import { Loader } from "../../components/loader/loader";
import { PostCard } from "../../components/postCard/postCard";
export const UserPage=({onComment})=>{
    const [currentUser,setCurrentUser]=useState(null)
    const [currentUserPost,setCurrentUserPost]=useState([]);
    const [isLoading,setIsLoading]=useState(true)
    const navigate=useNavigate();
    const {isLogin}=useAuth();
    const {user}=useParams();
    useEffect(()=>{
        setIsLoading(true)
        if(isLogin){
            (async()=>{
                try{
                    const response=await getUser(user);
                    const response2=await getUserPostsService(response?.data?.user?.username)
                    if(response?.status===200){
                        setCurrentUser(response?.data?.user)
                    }
                    else throw response;
                    if(response2?.status===200 || response2?.status===201){
                        setCurrentUserPost(response2?.data?.posts);
                        setIsLoading(false)
                    }
                    else throw response2;
                }
                catch(e){
                    console.error(e);
                    setIsLoading(false)
                }
            })()
        }
    },[isLogin,navigate,user])
document.title=`ChatsterGram | ${currentUser?.username}`;
    return <>
   {isLoading?<Loader/>:<>
   <ProfileCard posts={currentUserPost} user={currentUser}/>
   {currentUserPost?.map((post,index)=><PostCard post={post} key={index} onComment={onComment}/>)}
    </>}
    </>
}