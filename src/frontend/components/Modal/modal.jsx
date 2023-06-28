import modalCSS from "./modal.module.css";
export const Modal=({children,closeModal})=>{
    return <div className={modalCSS?.modalWrapper}>
        <div className={modalCSS.modalContainer}>
        {children}
        <div><button onClick={()=>closeModal()}>Close</button></div>
        </div>
    </div>
}