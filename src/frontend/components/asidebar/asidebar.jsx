import asidebarCSS from "./asidebar.module.css";
export const Asidebar=({component})=>{
    return<div className={asidebarCSS.asidebar}>
        {component}
    </div>
}