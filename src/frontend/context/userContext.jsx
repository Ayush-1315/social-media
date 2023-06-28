import { createContext, useContext, useEffect, useState } from "react";
import { getAllUsers, unfollowUserService, updateUserService } from "../services/userService";
import { useAuth } from "./authContext";
import { followUserService } from "../services/userService";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const { isLogin, setIsLogin, encodedToken } = useAuth();
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getAllUsers();
        if (response?.status === 200) {
          const users = response?.data?.users;
          setAllUsers(users);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [isLogin]);

  const followUser = async (followId) => {
    try {
      const response = await followUserService(followId, encodedToken);
      if (response?.status === 200) {
        setIsLogin(response?.data?.user);
      } else throw response;
    } catch (e) {
      console.error(e);
    }
  };

  const unfollowUser = async (followId) => {
    try {
      const response = await unfollowUserService(followId, encodedToken);
      if (response?.status === 200) {
        setIsLogin(response?.data?.user);
      } else throw response;
    } catch (e) {
      console.error(e);
    }
  };

  const updateUser=async(userData)=>{
    try{
const response=await updateUserService(userData,encodedToken);
if(response?.status===201){
  // console.log()
  setIsLogin({...response?.data?.user})
}
else throw response
    }
catch(e){
  console.error(e);
}
  }
  return (
    <UserContext.Provider
      value={{
        allUsers,
        followUser,
        unfollowUser,
        updateUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
