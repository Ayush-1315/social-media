import suggestionCSS from "./suggestions.module.css";
import {useUser} from "../../context/userContext";
export const Suggestions=()=>{
    const {allUsers,followUser}=useUser();
    console.log(allUsers);
    return <div className={suggestionCSS.suggestionBox}>
        <p>Suggestions for you</p>
        {/* <button onClick={()=>followUser(allUsers[0]?._id)}>Follow</button> */}
        <ul>
            {allUsers.length!==0?
            allUsers.map((user,index)=>{
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