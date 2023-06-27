import modalCSS from "./modal.module.css";
export const Modal=({children})=>{
    return <div className={modalCSS?.modalWrapper}>
        <div className={modalCSS.modalContainer}>
        {children}
        </div>
    </div>
}