import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/authContext";

import profilePage from "./profile.module.css";
import { PostCard } from "../../components/postCard/postCard";
import { useUser } from "../../context/userContext";
import { useState } from "react";

export const Profile = () => {
  const navigate = useNavigate();
  const { logoffUser, isLogin, updateUser } = useAuth();
  const {posts,getPostByUser}=useUser()
  const [userPosts,setUserPosts]=useState([]);
  useEffect(() => {
    if (isLogin) {
      navigate("/profile");
      document.title = `${isLogin?.username} | Profile`;
      (async()=>{
        const response=await getPostByUser(isLogin.username);
        setUserPosts(response);
      })()
    }
  }, [isLogin]);
  return (
    <>
      <div className={profilePage.page}>
        <div className={profilePage.content}>
          <div className={profilePage.profileCard}>
            <img
              src={isLogin?.profile}
              alt={isLogin?.username}
              className={profilePage.profileImg}
            />
            <h2>{`${isLogin?.firstName} ${isLogin?.lastName}`}</h2>
            <p>@{isLogin?.username}</p>
            <p>{isLogin?.bio}</p>
            <div className={profilePage.profileSociety}>
              <div className={profilePage.status}>
                <p>{isLogin?.following.length}</p>
                <p>Following</p>
              </div>
              <div className={profilePage.status}>
                <p>{posts.length}</p>
                <p>Posts</p>
              </div>
              <div className={profilePage.status}>
                <p>{isLogin?.followers.length}</p>
                <p>Followers</p>
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              updateUser({
                firstName: "Ayush",
                lastName: "Raj",
              })
            }
          >
            Edit
          </button>
          <button onClick={() => logoffUser()}>Log Out</button>
          <div className={profilePage.postContainer}>
            <h2>Your Posts</h2>
            {userPosts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
