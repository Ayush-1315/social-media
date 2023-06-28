import { useAuth } from "../../context/authContext";

import home from "./home.module.css";
import { CreatePost } from "../../components/createPost/createPost";
import { useUser } from "../../context/userContext";
import { PostCard } from "../../components/postCard/postCard";
import { Modal } from "../../components/Modal/modal";

import { useState } from "react";
import { usePost } from "../../context/postContext";
import { useEffect } from "react";
import { Loader } from "../../components/loader/loader";
export const Home = () => {
  document.title = "Chatster | Home";
  const { isLogin } = useAuth();
  const [usersFeed, setUsersFeed] = useState([]);
  const { postState, deletePost,createPost } = usePost();
  useEffect(() => {
    setUsersFeed([]);
    setUsersFeed((prev) => [
      ...prev,
      ...postState?.posts?.filter(({ username }) =>
        isLogin?.following?.reduce(
          (isFollowing, { username: followUser }) =>
            followUser === username ? true : isFollowing,
          false
        )
      ),
      ...postState?.posts?.filter(
        ({ username }) => username === isLogin?.username
      ),
    ]);
    if(postState?.sortBy==="trending"){
      setUsersFeed(prev=>prev.sort((a,b)=>b?.likes?.likeCount-a?.likes?.likeCount))
    }
    else if(postState?.sortBy==="latest"){
      setUsersFeed(prev=>prev.sort((a,b)=>new Date(b?.createdAt)-new Date(a?.createdAt)));
    }
  }, [postState,isLogin]);
  console.log(postState);
  // const { createNewPost } = useUser();
  const [showModal, setShowModal] = useState(false);
  const onSubmitFun = (newPost) => {
    createPost(newPost);
    console.log(newPost);
    setShowModal(false);
  };

  const [editPost, setEditPost] = useState(null);
  const onEditFun = (data) => {
    setEditPost(data);
    setShowModal(true);
  };
  const onEditPost = () => {
    setShowModal(false);
  };
  const onDelete = (postId) => deletePost(postId);
 
  return (
    <>
      {postState.postLoading ? (
        <Loader/>
      ) : (
        <>
          {showModal && (
            <Modal>
              <CreatePost
                user={isLogin}
                onSubmit={onSubmitFun}
                initialData={editPost}
                onEdit={onEditPost}
                isEdit="true"
              />
            </Modal>
          )}
          <div className={home.content}>
            <CreatePost user={isLogin} onSubmit={onSubmitFun} />
            {usersFeed.map((post, index) => (
              <PostCard
                key={index}
                post={post}
                onEdit={onEditFun}
                onDelete={onDelete}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};
