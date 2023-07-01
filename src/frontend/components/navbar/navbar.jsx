import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import navbar from "./navbar.module.css";
import { useAuth } from "../../context/authContext";
export const Navbar=()=>{
    const {isLogin}=useAuth();
    return <nav className={navbar.navbar}>
        <div>
        <Link to="/home" className={navbar.brand}>ChatsterGram</Link></div>
        <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={navbar.navIcons}/>
        </div>
        <div>
            <Link to="/profile">{isLogin?.profile===""?<span className={navbar.profileIcon}>{isLogin?.username?.[0]?.toUpperCase()}</span>:<span className={navbar.profileImage} style={{backgroundImage:`url(${isLogin?.profile})`}}></span>}</Link>
        </div>
    </nav>
}