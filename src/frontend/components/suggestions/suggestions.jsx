import suggestionCSS from "./suggestions.module.css";
import {useUser} from "../../context/userContext";
export const Suggestions=()=>{
    const {notFollowingUsers,followUser}=useUser();
    return <div className={suggestionCSS.suggestionBox}>
        <p>Suggestions for you</p>
        <ul>
            {notFollowingUsers.length!==0?
            notFollowingUsers.map((user,index)=>{
                const {firstName,lastName,username,_id}=user;
                return <li key={index}>
                    <p>{`${firstName} ${lastName}`}</p>
                    <p>{username}</p>
                    <button onClick={()=>followUser(_id)}>Follow</button>
                </li>
            }):"No  more suggestion"}
        </ul>
    </div>
}