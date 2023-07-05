import { useNavigate} from "react-router";
import {Link } from "react-router-dom"
import { LoginForm } from "../../components/loginForm/loginForm";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import "./loginPage.css";
export const LoginPage = () => {
  const { logUser, isLogin } = useAuth();
  const navigate = useNavigate();
  document.title = "ChatsterGram | Login";
  useEffect(() => {
    isLogin && navigate("/home");
  }, [isLogin, navigate]);
  return (
    <>
      <div className="loginContainer">
        <div className="loginLeft"></div>
        <div className="loginRight">
          <span>ChatsterGram</span>
          <LoginForm signupRoute="/signup" onFinish={(data) => logUser(data)} />
          <button
            onClick={() =>
              logUser({ username: "adarshbalika", password: "adarshBalika123" })
            }
          >
            Guest User
          </button>
          <Link to="/signup">Create New Account</Link>
        </div>
      </div>
    </>
  );
};
