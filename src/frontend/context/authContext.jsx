import { createContext, useContext, useEffect,useState} from "react";
import { useNavigate } from "react-router";

import { loginAuth } from "../services/authService";
import { errorToast, notifyToast } from "../../App";
const AuthContext =createContext();
export const AuthProvider = ({ children }) => {
  const navigate=useNavigate()
  const [isLogin,setIsLogin]=useState(false)
    useEffect(() => {
      const userData=JSON.parse(localStorage?.getItem("user"))??false
      setIsLogin(userData);
      // console.log(userData);
      userData&& navigate("/");
    },[navigate]);

    
    const logUser=async({username,password})=>{
      try{
        const response=await loginAuth({username,password});
        if(response?.status===200){
          setIsLogin(true);
          // console.log(response)
          notifyToast("Logged In")
          localStorage.setItem("user",JSON.stringify(response?.data))
          navigate("/");
        }
        else throw response;
      }
      catch(e){
        errorToast('Invalid Credentials')
        if(e?.response?.status===404)
        console.error(e?.response?.data?.errors[0]);
      }
    }
    // console.log(isLogin)
  return (
    <AuthContext.Provider value={{ isLogin,logUser }}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
