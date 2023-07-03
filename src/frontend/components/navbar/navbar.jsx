import { Link } from "react-router-dom"

import navbar from "./navbar.module.css";
import { useAuth } from "../../context/authContext";
import { SearchBar } from "../searchBar/searchBar";
import { useUser } from "../../context/userContext";
import logo from "../../assets/logo.png";
export const Navbar=()=>{
    const {isLogin}=useAuth();
    const {allUsers}=useUser()
    return <nav className={navbar.navbar}>
        <div>
        <Link to="/home" className={navbar.brand}><img src={logo} alt="logo" className={navbar.logo} /><span>ChatsterGram</span></Link></div>
        <div>
        <SearchBar searchData={allUsers}/>
        </div>
        <div>
            <Link to="/profile">{isLogin?.profile===""?<span className={navbar.profileIcon}>{isLogin?.username?.[0]?.toUpperCase()}</span>:<span className={navbar.profileImage} style={{backgroundImage:`url(${isLogin?.profile})`}}></span>}</Link>
        </div>
    </nav>
}