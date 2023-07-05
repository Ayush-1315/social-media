import { useNavigate } from "react-router";

import suggestionCSS from "./suggestions.module.css";
import { useUser } from "../../context/userContext";
import { useAuth } from "../../context/authContext";
export const Suggestions = () => {
  const navigate = useNavigate();
  const { allUsers, followUser, unfollowUser } = useUser();
  const { isLogin } = useAuth();
  const clickHandler = (userId) => navigate(`/user/${userId}`);
  return (
    <div className={suggestionCSS.suggestionBox}>
      <p className={suggestionCSS.salutation}>Suggestions</p>
      <ul>
        {allUsers
          .filter(({ username }) => username !== isLogin.username)
          .map((user, index) => {
            const { firstName, lastName, username, _id, profile } = user;
            return (
              <li key={index}>
                <div>
                  <span
                    className={suggestionCSS.profile}
                    style={{ backgroundImage: `url(${profile})` }}
                  ></span>
                  <div onClick={() => clickHandler(_id)}>
                    <p>{`${firstName} ${lastName}`}</p>
                    <p>@{username}</p>
                  </div>
                </div>
                {isLogin?.following?.reduce(
                  (isFollowing, { username: storedFollowing }) =>
                    storedFollowing === username ? true : isFollowing,
                  false
                ) ? (
                  <button onClick={() => unfollowUser(_id)}> Following</button>
                ) : (
                  <button onClick={() => followUser(_id)}>Follow +</button>
                )}
          
              </li>
            );
          })}
      </ul>
    </div>
  );
};
