import { useLocation } from "react-router";

import asidebarCSS from "./asidebar.module.css";
import { usePost } from "../../context/postContext";
export const Asidebar=({component})=>{
    const {sortPost}=usePost();
    return<div className={asidebarCSS.asidebar}>
        {useLocation().pathname.slice(1) ==="home" && <div className={asidebarCSS.filters}>
            
            <button onClick={()=>sortPost("trending")}>Trending</button>
            <button onClick={()=>sortPost("latest")}>Latest</button>
            </div>}
        {component}
    </div>
}