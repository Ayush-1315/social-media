import { useEffect, useState } from "react";

import { useAuth } from "../../context/authContext";
import { Modal } from "../../components/Modal/modal";
import { CreatePost } from "../../components/createPost/createPost";
import { PostCard } from "../../components/postCard/postCard";
import { usePost } from "../../context/postContext";
import { Loader } from "../../components/loader/loader";

export const LikedPostPage = () => {
  document.title = "ChatsterGram | Liked";
  const { isLogin } = useAuth();
  const { postState, deletePost } = usePost();
  const [likedPosts, setLikedPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    setLikedPosts(
      postState?.posts?.filter(({ likes: { likedBy } }) =>
        likedBy?.reduce(
          (isLiked, { username }) =>
            username === isLogin?.username ? true : isLiked,
          false
        )
      )
    );
    setIsLoading(false);
  }, [isLogin, postState]);
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
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
         {likedPosts.length===0? <h2>No Liked Posts</h2>:<>
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
          <h2>Liked Posts</h2>
          {likedPosts.map((post, index) => (
            <PostCard
              post={post}
              key={index}
              onEdit={onEditFun}
              onDelete={onDelete}
            />
          ))}</>}
        </>
      )}
    </>
  );
};
