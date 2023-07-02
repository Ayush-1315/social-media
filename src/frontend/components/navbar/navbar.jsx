import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import navbar from "./navbar.module.css";
import { useAuth } from "../../context/authContext";
import { SearchBar } from "../searchBar/searchBar";
import { useUser } from "../../context/userContext";
export const Navbar=()=>{
    const {isLogin}=useAuth();
    const {allUsers}=useUser()
    return <nav className={navbar.navbar}>
        <div>
        <Link to="/home" className={navbar.brand}>ChatsterGram</Link></div>
        <div>
        <SearchBar searchData={allUsers}/>
        </div>
        <div>
            <Link to="/profile">{isLogin?.profile===""?<span className={navbar.profileIcon}>{isLogin?.username?.[0]?.toUpperCase()}</span>:<span className={navbar.profileImage} style={{backgroundImage:`url(${isLogin?.profile})`}}></span>}</Link>
        </div>
    </nav>
}