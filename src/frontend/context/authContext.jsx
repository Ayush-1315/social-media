import { createContext, useContext, useEffect,useState} from "react";
import { useNavigate} from "react-router";

import { loginAuth, signupAuth } from "../services/authService";
import { errorToast, notifyToast } from "../../App";
import {updateUserService } from "../services/userService";
const AuthContext =createContext();
export const AuthProvider = ({ children }) => {
  const navigate=useNavigate()
  const [isLogin,setIsLogin]=useState(false)
    useEffect(() => {
      const userData=JSON.parse(localStorage?.getItem("user"))??false
      setIsLogin(userData?.foundUser);
    },[]);

    
    const logUser=async({username,password})=>{
      try{
        const response=await loginAuth({username,password});
        if(response?.status===200){
          setIsLogin(response?.data?.foundUser);
          notifyToast("Logged In")
          localStorage.setItem("user",JSON.stringify(response?.data))
          navigate("/home");
        }
        else throw response;
      }
      catch(e){
        errorToast('Invalid Credentials')
        if(e?.response?.status===404)
        console.error(e?.response?.data?.errors[0]);
      }
    }
    const createUser=async(userCred)=>{
      try{
        const response=await signupAuth(userCred);
        console.log(response)
        if(response?.status===201){
          setIsLogin(response?.data?.createdUser);
          notifyToast("Logged In")
          localStorage.setItem("user",JSON.stringify(response?.data));
          console.log(response?.data)
          navigate("/home");
        }
        else throw response;
      }
      catch(e){
        errorToast('Invalid Credentials')
        if(e?.response?.status===404)
        console.error(e?.response?.data?.errors[0]);
      }
    }
    const logoffUser=()=>{
      localStorage.clear();
      navigate('/');
      notifyToast('Logged off');
      setIsLogin(false);
    }
  const updateUser=async(userCred)=>{
    try{
      const response=await updateUserService(userCred,JSON.parse(localStorage?.getItem("user"))?.encodedToken);
      console.log(response);
    }
    catch (e){
      console.log(e)
    }
  }
 
  return (
    <AuthContext.Provider value={{ isLogin,logUser,createUser,logoffUser,updateUser,setIsLogin}}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
