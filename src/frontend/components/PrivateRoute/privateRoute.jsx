import {Navigate } from "react-router";
import { useAuth } from "../../context/authContext";
export const PrivateRoute=({children})=>{
    const {isLogin}=useAuth();
    return isLogin?children:<Navigate to="/"/>;
}