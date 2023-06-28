import { useEffect, useState } from "react";

import { useAuth } from "../../context/authContext";
import { Modal } from "../../components/Modal/modal";
import { CreatePost } from "../../components/createPost/createPost";
import { PostCard } from "../../components/postCard/postCard";
import { usePost } from "../../context/postContext";

export const LikedPostPage = () => {
  document.title = "Chatster | Liked";
  const { isLogin } = useAuth();
  const {postState,deletePost}=usePost();
  const [likedPosts, setLikedPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);
  useEffect(() => {
    setLikedPosts(
              postState?.posts?.filter(({ likes: { likedBy } }) =>
                likedBy?.reduce(
                  (isLiked, { username }) =>
                    username === isLogin?.username ? true : isLiked,
                  false
                )
              )
            );

  }, [isLogin,postState]);
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
  console.log(likedPosts);
  return <>
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
    
  Liked Posts Here
  {
    likedPosts.map((post,index)=><PostCard post={post} key={index} onEdit={onEditFun}
    onDelete={onDelete} />)
  }
  </>;
};
