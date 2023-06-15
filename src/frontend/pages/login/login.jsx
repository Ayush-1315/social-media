import { useNavigate } from "react-router";
import { LoginForm } from "../../components/loginForm/loginForm";
import { useAuth } from "../../context/authContext";
import { useEffect} from "react";
import './loginPage.css'
export const LoginPage = () => {
  const { logUser,isLogin } = useAuth();
  const navigate=useNavigate();
  useEffect(()=>{
    isLogin && navigate('/');
  },[isLogin,navigate])
  const getData=(values)=>{
    logUser({...values})
  }
  return (
    <>
      <div className="loginContainer">
        <div className="loginLeft"></div>
        <div className="loginRight"> 
        Login Here!
        <LoginForm onFinish={getData} signupRoute="/signup"/>
        <button onClick={()=>logUser({username:'adarshbalika',password:'adarshBalika123'})}>Test Credentials</button>
        </div>
      </div>
    </>
  );
};
