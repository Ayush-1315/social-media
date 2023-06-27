import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/postsService";
import { useAuth } from "../../context/authContext";
import { useUser } from "../../context/userContext";
import { Modal } from "../../components/Modal/modal";
import { CreatePost } from "../../components/createPost/createPost";
import { PostCard } from "../../components/postCard/postCard";

export const LikedPostPage = () => {
  document.title = "Chatster | Liked";
  const { isLogin } = useAuth();
  const { usersFeed, deletePost } = useUser();
  const [likedPosts, setLikedPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);
  // useEffect(()=>{
  //     isLogin && navigate('/liked')
  // },[isLogin,navigate])
  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await getAllPosts();
        if (status === 200) {
          setLikedPosts(
            data?.posts?.filter(({ likes: { likedBy } }) =>
              likedBy?.reduce(
                (isLiked, { username }) =>
                  username === isLogin?.username ? true : isLiked,
                false
              )
            )
          );
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [isLogin,usersFeed]);
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
