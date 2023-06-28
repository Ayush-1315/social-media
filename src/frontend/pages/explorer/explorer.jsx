import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { PostCard } from "../../components/postCard/postCard";
import { Modal } from "../../components/Modal/modal";
import { CreatePost } from "../../components/createPost/createPost";
import { usePost } from "../../context/postContext";
import { Loader } from "../../components/loader/loader";
export const ExplorerPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const { isLogin } = useAuth();
  const {postState,deletePost}=usePost();
  document.title = "Chatster | Explore";
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
  return (<>
   {postState?.postLoading?<Loader/>: <>
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
      <div>
        <h1> Explore the world !</h1>
        <div>{postState.posts.map((post,index)=><PostCard post={post} key={index} onEdit={onEditFun}
              onDelete={onDelete} />)}</div>
      </div>
    </>}
  </>
  );
};
