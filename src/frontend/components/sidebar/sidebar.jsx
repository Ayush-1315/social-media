import { Link, useLocation } from "react-router-dom";

import sidebarCSS from "./sidebar.module.css";
export const Sidebar=({onCreatePost})=>{
    const location=useLocation().pathname.slice(1);
    return <div className={sidebarCSS.sidebar}>
        <ul className={sidebarCSS.optionContainer}>
            <li className={location==="home"?`${sidebarCSS.options} ${sidebarCSS.optionsHighlight}`:sidebarCSS.options}><Link to="/home"><i className="fa-solid fa-house"></i>Home</Link></li>
            <li className={location==="explore"?`${sidebarCSS.options} ${sidebarCSS.optionsHighlight}`:sidebarCSS.options}><Link to="/explore"><i className="fa-solid fa-compass"></i>Explore</Link></li>
            <li className={location==="bookmarks"?`${sidebarCSS.options} ${sidebarCSS.optionsHighlight}`:sidebarCSS.options}><Link to="/bookmarks"><i className="fa-solid fa-bookmark"></i>Bookmarks</Link></li>
            <li className={location==="liked"?`${sidebarCSS.options} ${sidebarCSS.optionsHighlight}`:sidebarCSS.options}><Link to="/liked"><i className="fa-solid fa-heart"></i>Liked</Link></li>
        </ul>
        <div className={sidebarCSS.options}><button onClick={()=>onCreatePost()}>Post</button></div>
    </div>
}