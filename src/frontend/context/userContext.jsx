import { createContext, useContext, useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";
import { useAuth } from "./authContext";
import {
  createPostService,
  getAllPosts,
  getUserPosts,
} from "../services/postsService";
import { followUserService } from "../services/userService";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const { isLogin, setIsLogin } = useAuth();
  const [allUsers, setAllUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);
  const notFollowingUsers = allUsers.filter(
    ({ username }) => !followingUsers?.includes(username)
  );
  const getPostByUser = async (username) => {
    try {
      const response = await getUserPosts(username);
      if (response?.status === 200) {
        return(response?.data?.posts);
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
          const users = response?.data?.users.filter(
            ({ username }) => username !== isLogin?.username
          );
          setAllUsers(users);
          setFollowingUsers(
            isLogin?.following?.map(({ username }) => username)
          );
        }
      } catch (e) {
        console.error(e);
      }
    })();
    // (async () => {
    //   try {
    //     const response = await getUserPosts(isLogin?.username);
    //     if (response?.status === 200) {
    //       setPosts(response?.data?.posts);
    //     }
    //   } catch (e) {
    //     console.error(e);
    //   }
    // })();
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
  }, [isLogin]);
  useEffect(()=>{
    console.log("hi")
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
      setPosts(response?.data?.posts)
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <UserContext.Provider
      value={{
        allUsers,
        posts,
        allPosts,
        followUser,
        followingUsers,
        notFollowingUsers,
        getPostByUser,
        createNewPost
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
