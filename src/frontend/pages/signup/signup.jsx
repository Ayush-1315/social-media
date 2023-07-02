import { useEffect } from "react";

import { SignUpForm } from "../../components/signupForm/signupForm";
import { useAuth } from "../../context/authContext";
import signUp from "./signUp.module.css";
import { useNavigate } from "react-router";

export const SignupPage = () => {
  document.title = "ChatsterGram | SignUp";
  const { createUser,isLogin } = useAuth();
  const submitForm=(data)=>{
      createUser(data)
    }
const navigate=useNavigate();
    useEffect(()=>{
        if(isLogin)
        navigate("/home");
    },[isLogin,navigate])
  return (
    <div className={signUp.pageBody}>
      <div className={signUp.signUpFormContainer}>
        <SignUpForm onSubmit={submitForm}/>
      </div>
    </div>
  );
};
