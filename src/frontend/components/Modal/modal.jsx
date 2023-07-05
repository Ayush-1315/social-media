import modalCSS from "./modal.module.css";
export const Modal=({children,closeModal})=>{
    const wrapperHandler=()=>closeModal();
    const containerHandler=(e)=>e.stopPropagation()
    return <div className={modalCSS.modalWrapper} onClick={wrapperHandler}>
        <div className={modalCSS.modalContainer} onClick={containerHandler}>
        {children}
        </div>
    </div>
}