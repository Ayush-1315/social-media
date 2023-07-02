import { useAuth } from "../../context/authContext";
import { useUser } from "../../context/userContext";
import profile from "./profile.Card.module.css";

export const ProfileCard = ({ user, posts }) => {
  const { followUser, unfollowUser } = useUser();
  const { isLogin } = useAuth();
  return (
    <div className={profile.profileCard}>
      <img
        src={user?.profile}
        alt={user?.username}
        className={profile.profileImg}
      />
      <div>
        <h2
          className={profile.userDisplayName}
        >{`${user?.firstName} ${user?.lastName}`}</h2>
        <p className={profile}>@{user?.username}</p>
      </div>
      <p className={profile.userDisplayBio}>{user?.bio}</p>
      <p className={profile.webLink}>
        <i className="fa-solid fa-link"></i>
        <a href={user?.website} target="_black" rel="noreferrer" >
          {user?.website}
        </a>
      </p>
      <div className={profile.profileSociety}>
      <div className={profile.status}>
            <p>{user?.following.length}</p>
            <p>Following</p>
          </div>
        <div className={profile?.status}>
          <p>{posts?.length}</p>
          <p>Posts</p>
        </div>
        <div className={profile?.status}>
          <p>{user?.followers?.length}</p>
          <p>Followers</p>
        </div>
      </div>
      {isLogin?.following?.reduce(
        (isFollowing, { username: storedFollowing }) =>
          storedFollowing === user?.username ? true : isFollowing,
        false
      ) ? (
        <button onClick={() => unfollowUser(user?._id)} className={profile.followBtn}> Following</button>
      ) : (
        <button onClick={() => followUser(user?._id)} className={profile.followBtn}>Follow +</button>
      )}
    </div>
  );
};
