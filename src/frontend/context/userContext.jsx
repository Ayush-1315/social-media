import { createContext, useContext, useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";
import { useAuth } from "./authContext";
import {
  createPostService,
  getUserPosts,
  deletePostService,
  likePostService
} from "../services/postsService";
import { followUserService } from "../services/userService";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const { isLogin, setIsLogin } = useAuth();
  const [allUsers, setAllUsers] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);
  const [usersFeed,setUsersFeed]=useState([]);
  const [deletedPosts,setDeletedPosts]=useState([]);
  const notFollowingUsers = allUsers.filter(
    ({ username }) => !followingUsers?.includes(username) && username!==isLogin?.username
  );  
  
  const getPostByUser = async (username) => {
    try {
      const response = await getUserPosts(username);
      if (response?.status === 200) {
        return response?.data?.posts;
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await getAllUsers();
        if (response?.status === 200) {
          const users = response?.data?.users
          setAllUsers(users);
          setFollowingUsers(isLogin?.following?.map(({ username }) => username));
        }
      } catch (e) {
        console.error(e);
      }
    })();
    (async () => {
      try {
        const response = await getUserPosts(isLogin?.username);
        if (response?.status === 200) {
          setUsersFeed(response?.data?.posts?.filter(({_id})=>!deletedPosts.includes(_id)));
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [isLogin,deletedPosts]);
  useEffect(()=>{
    
    (()=>{
      console.log("userContext ")
          followingUsers?.map(async(user)=>{
          const response=await getUserPosts(user)
          setUsersFeed(prev=>[...prev,...response?.data?.posts])
          ;})
      
    })()
  },[followingUsers])
  const followUser = async (followId) => {
    try {
      const encodedToken = JSON.parse(
        localStorage?.getItem("user")
      )?.encodedToken;
      const response = await followUserService(followId, encodedToken);
      if (response?.status === 200) {
        setIsLogin(response?.data?.user);
        localStorage.removeItem("user");
        localStorage.setItem(
          "user",
          JSON.stringify({
            encodedToken,
            userData: response?.data?.user,
          })
        );
        setFollowingUsers([
          ...isLogin?.following?.map(({ username }) => username),
          response?.data?.followUser?.username,
        ]);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const createNewPost = async (postData) => {
    const encodedToken = JSON.parse(
      localStorage?.getItem("user")
    )?.encodedToken;
    try {
      const response = await createPostService(postData, encodedToken);
      console.log(response)  
      setUsersFeed(response?.data?.posts);
    } catch (e) {
      console.error(e);
    }
  };
const deletePost=async(postId)=>{
  const encodedToken = JSON.parse(
    localStorage?.getItem("user")
  )?.encodedToken;
  try {
    const response = await deletePostService(postId, encodedToken);
    if(response?.status===200){
      setDeletedPosts(prev=>[...prev,response?.data?.post?._id]);
    }
    else throw response;
  } catch (e) {
    console.error(e);
  }
}
const likePost=async(postId)=>{
  try{
const response=await likePostService(postId,JSON.parse(localStorage.getItem("user")).encodedToken);
console.log(response);
setUsersFeed(response?.data?.posts);
  }
  catch(e){
    console.log(e)
  }
}
  return (
    <UserContext.Provider
      value={{
        allUsers,
        followUser,
        followingUsers,
        notFollowingUsers,
        getPostByUser,
        createNewPost,
        deletePost,
        setUsersFeed,
        deletedPosts,
        likePost,
        usersFeed
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
