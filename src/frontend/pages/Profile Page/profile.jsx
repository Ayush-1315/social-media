import { useEffect } from "react";

import { useAuth } from "../../context/authContext";
import { PostCard } from "../../components/postCard/postCard";
import { useState } from "react";
import { Modal } from "../../components/Modal/modal";
import { CreatePost } from "../../components/createPost/createPost";
import { usePost } from "../../context/postContext";
import { Loader } from "../../components/loader/loader";
import profilePage from "./profile.module.css";
import { UserEdit } from "../../components/updateUser/updateUser";
import { useUser } from "../../context/userContext";

export const Profile = ({onComment}) => {
  const { logoffUser, isLogin} = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [isUserEdit, setIsUserEdit] = useState(false);
  const {updateUser}=useUser();
  document.title = `${isLogin?.username} | Profile`;
  const { getUserPosts, postState, deletePost } = usePost();
  useEffect(() => {
    (async () => {
      await getUserPosts(isLogin?.username);
    })();
    // eslint-disable-next-line
  }, [isLogin]);
  const onSubmitFun = () => {
    setShowModal(false);
  };
  const onEditPost = () => {
    setShowModal(false);
  };
  const onEditFun = (data) => {
    setEditPost(data);
    setShowModal(true);
  };
  const onDelete = (postId) => deletePost(postId);
  const userEditSubmit=(data)=>{
    updateUser(data)
    setIsUserEdit(false);
  }
  const discardUserEdit=()=>setIsUserEdit(false);
  return (
    <>
      {postState?.postLoading ? (
        <Loader />
      ) : (
        <>
          {showModal && (
            <Modal closeModal={() => setShowModal(false)}>
              <CreatePost
                user={isLogin}
                onSubmit={onSubmitFun}
                initialData={editPost}
                onEdit={onEditPost}
                isEdit="true"
              />
            </Modal>
          )}
          {isUserEdit && (
            <Modal closeModal={()=>setIsUserEdit(false)}>
              <UserEdit
              initialData={{
                firstName: isLogin?.firstName,
                lastName: isLogin?.lastName,
                profile: isLogin?.profile,
                bio: isLogin?.bio,
                website:isLogin?.website,
              }}
              onSubmit={userEditSubmit}
              onDiscard={discardUserEdit}
            />
            </Modal>
          )}
          <div className={profilePage.page}>
            <div className={profilePage.content}>
              <div className={profilePage.profileCard}>
                <img
                  src={isLogin?.profile}
                  alt={isLogin?.username}
                  className={profilePage.profileImg}
                />
                <h2 className={profilePage.userDisplayName}>{`${isLogin?.firstName} ${isLogin?.lastName}`}</h2>
                <p className={profilePage.userDisplay}>@{isLogin?.username}</p>
                <p className={profilePage.userDisplayBio}>{isLogin?.bio}</p>
                <div className={profilePage.profileSociety}>
                  <div className={profilePage.status}>
                    <p>{isLogin?.following.length}</p>
                    <p>Following</p>
                  </div>
                  <div className={profilePage.status}>
                    <p>{postState?.userPosts.length}</p>
                    <p>Posts</p>
                  </div>
                  <div className={profilePage.status}>
                    <p>{isLogin?.followers.length}</p>
                    <p>Followers</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsUserEdit(true)}>Edit</button>
              <button onClick={() => logoffUser()}>Log Out</button>
              <div className={profilePage.postContainer}>
                <h2>Your Posts</h2>
                {postState.userPosts?.length === 0 ? (
                  <h2> No post</h2>
                ) : (
                  postState?.userPosts.map((post, index) => (
                    <PostCard
                      post={post}
                      key={index}
                      onEdit={onEditFun}
                      onDelete={onDelete}
                      onComment={onComment}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
