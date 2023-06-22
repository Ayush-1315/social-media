import { Link } from "react-router-dom";

import sidebarCSS from "./sidebar.module.css";
export const Sidebar=()=>{
    return <div className={sidebarCSS.sidebar}>
        <ul className={sidebarCSS.optionContainer}>
            <li className={sidebarCSS.options}><Link to="/home">Home</Link></li>
            <li className={sidebarCSS.options}><Link to="/explore">Explore</Link></li>
            <li className={sidebarCSS.options}><Link to="/bookmarks">Bookmarks</Link></li>
            <li className={sidebarCSS.options}><Link to="/liked">Liked Posts</Link></li>
            <li className={sidebarCSS.options}><button>Post</button></li>
        </ul>
    </div>
}