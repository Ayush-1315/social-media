import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { getAllPosts } from "../../services/postsService";
import { useState } from "react";
import { PostCard } from "../../components/postCard/postCard";
import { useUser } from "../../context/userContext";
import { Modal } from "../../components/Modal/modal";
import { CreatePost } from "../../components/createPost/createPost";
import { usePost } from "../../context/postContext";
import { Loader } from "../../components/loader/loader";
export const ExplorerPage = () => {
  const [explorerFeed,setExplorerFeed]=useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const navigate = useNavigate();
  const { isLogin } = useAuth();
  const {susersFeed}=useUser();
  const {postState,deletePost}=usePost();
  document.title = "Chatster | Explore";
  // useEffect(() => {
  //  if(isLogin){ 
  //   isLogin && navigate("/explore");
  //   (async()=>{ 
  //     try{
  //       const response=await getAllPosts();
  //       if(response?.status===200){
  //         setExplorerFeed(response?.data?.posts)
  //       }
  //     }
  //     catch(e){
  //       console.error(e);
  //     }
  //   })()
  // }
// console.log(postState);
//   }, [isLogin, navigate]);
// console.log(postState)
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
   {postState?.posts?.length===0?<Loader/>: <>
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
