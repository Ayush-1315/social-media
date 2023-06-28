import suggestionCSS from "./suggestions.module.css";
import { useUser } from "../../context/userContext";
import { useAuth } from "../../context/authContext";
export const Suggestions = () => {
  const { allUsers, followUser,unfollowUser } = useUser();
  const {isLogin}=useAuth();
  return (
    <div className={suggestionCSS.suggestionBox}>
      <p className={suggestionCSS.salutation}>Suggestions</p>
      <ul>
        {allUsers.map((user, index) => {
          const { firstName, lastName, username, _id } = user;
          return (
            <li key={index}>
              <div>
                <p>{`${firstName} ${lastName}`}</p>
                <p>@{username}</p>
              </div>
             {isLogin?.following?.reduce((isFollowing,{username:storedFollowing})=>storedFollowing===username?true:isFollowing,false)?<button onClick={()=>unfollowUser(_id)}> Following</button>: <button onClick={() => followUser(_id)}>Follow +</button>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
