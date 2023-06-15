import { createContext, useContext, useEffect,useState} from "react";
import { useNavigate } from "react-router";

import { loginAuth, signupAuth } from "../services/authService";
import { errorToast, notifyToast } from "../../App";
const AuthContext =createContext();
export const AuthProvider = ({ children }) => {
  const navigate=useNavigate()
  const [isLogin,setIsLogin]=useState(false)
    useEffect(() => {
      const userData=JSON.parse(localStorage?.getItem("user"))??false
      setIsLogin(userData);
      userData&& navigate("/home");
    },[navigate]);

    
    const logUser=async({username,password})=>{
      try{
        const response=await loginAuth({username,password});
        if(response?.status===200){
          setIsLogin(true);
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
          setIsLogin(true);
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
    const logoffUser=()=>{
      localStorage.clear();
      navigate('/');
      notifyToast('Logged off');
    }
  return (
    <AuthContext.Provider value={{ isLogin,logUser,createUser,logoffUser }}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
