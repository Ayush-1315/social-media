// import { Link } from "react-router-dom"
import { useAuth } from "../../context/authContext"
export const Navbar=()=>{
    const {logoffUser}=useAuth();
    return <nav>
        <button onClick={()=>logoffUser()}>Logout</button>
    </nav>
}