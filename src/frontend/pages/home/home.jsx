import { useAuth } from "../../context/authContext";

import home from "./home.module.css";
import { CreatePost } from "../../components/createPost/createPost";
import { useUser } from "../../context/userContext";
import { PostCard } from "../../components/postCard/postCard";
import { Modal } from "../../components/Modal/modal";

import { useState } from "react";
export const Home = () => {
  document.title = "Chatster | Home";
  const { isLogin } = useAuth();
  const { createNewPost, usersFeed, deletePost } = useUser();
  const [showModal, setShowModal] = useState(false);
  const onSubmitFun = (newPost) => {
    createNewPost(newPost);
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
  );
};
