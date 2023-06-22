import { createContext,useContext, useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";
import { useAuth } from "./authContext";
import { getAllPosts, getUserPosts } from "../services/postsService";
import { followUserService } from "../services/userService";
const UserContext=createContext();
export const UserProvider=({children})=>{
    const {isLogin,setIsLogin}=useAuth();
    const [allUsers,setAllUsers]=useState([]);
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const followingUsers=isLogin?.following?.map(({username})=>username);
    useEffect(()=>{
        (async()=>{
            try{
                const response=await getAllUsers();
                if(response?.status===200){
                  const users=response?.data?.users.filter(({username})=>username!==isLogin?.username);
                  setAllUsers(users.filter(({username})=>!followingUsers.includes(username)));
                 
                }
            }
            catch(e){
                console.error(e)
            }
        })();
        (async () => {
            try {
              const response = await getUserPosts(isLogin?.username);
              if (response?.status === 200) {
                setPosts(response?.data?.posts);
              }
            } catch (e) {
              console.error(e);
            }
          })();
          (async () => {
            try {
              const response = await getAllPosts();
              if (response?.status === 200) {
                setAllPosts(response?.data?.posts);
              }
            } catch (e) {
              console.error(e);
            }
          })();
    },[isLogin,followingUsers]);
    const followUser=async(followId)=>{
      try{
        const encodedToken=JSON.parse(localStorage?.getItem("user"))?.encodedToken
        const response=await followUserService(followId,encodedToken);
        if(response?.status===200){
          setIsLogin(response?.data?.user);
          localStorage.removeItem("user");
          localStorage.setItem("user",JSON.stringify({
            encodedToken,
            foundUser:response?.data?.user
          }))
        }
      }
      catch(e){
        console.error(e)
      }
    }

    return <UserContext.Provider value={{allUsers,posts,allPosts,followUser}}>
        {children}
    </UserContext.Provider>
}
export const useUser=()=>useContext(UserContext);