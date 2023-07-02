import { Link, useNavigate } from "react-router-dom";

import landing from "./landingPage.module.css";
import illustration1 from "../../assets/Friends 03.png";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";

export const LandingPage = () => {
  const {isLogin}=useAuth();
  const navigate=useNavigate();
  useEffect(()=>{
    document.title = "ChatsterGram | Welcome ";
    if(isLogin)
    navigate("/home");

  },[isLogin,navigate])
  return (
    <div className={landing.landingBody}>
      <div className={landing.welcome}>
        <div className={landing.welcomeBrand}>
          Chatstergram<span className={landing.typer}>|</span>
        </div>
        <div className={landing.vecContainer}>
          <div className={landing.advertContainer}>
            <ul>
              <li>
                <span>Follow</span>
              </li>
              <li>
                <span>Connect</span>
              </li>
              <li>
                <span>Share</span>
              </li>
              <span>Already a User ?</span>
              <Link to="/login">Login</Link>
            </ul>
          </div>

          <p className={landing.beginChat}>
            <Link to="/signup">Join Now</Link>
          </p>
        </div>
        <div></div>
      </div>
      <div style={{ display: "flex" }}></div>
    </div>
  );
};
