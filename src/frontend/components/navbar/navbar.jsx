import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass,faMagnifyingGlass,faBookmark} from '@fortawesome/free-solid-svg-icons';
import navbar from "./navbar.module.css";
import { useAuth } from "../../context/authContext";
export const Navbar=()=>{
    const {isLogin}=useAuth();
    return <nav className={navbar.navbar}>
        <div>
        <Link to="/home">ChatsterGram</Link></div>
        <div>
            <FontAwesomeIcon icon={faCompass} className={navbar.navIcons}/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={navbar.navIcons}/>
            <FontAwesomeIcon icon={faBookmark} className={navbar.navIcons}/>
            {/* <Link to="/profile"><span className={navbar.profileIcon}>A</span></Link> */}
            <Link to="/profile">{isLogin?.profile===""?<span className={navbar.profileIcon}>{isLogin?.username?.[0]?.toUpperCase()}</span>:<span className={navbar.profileImage}><img src={isLogin?.profile} alt="profile"className={navbar.navbarImage}/></span>}</Link>
        </div>
    </nav>
}