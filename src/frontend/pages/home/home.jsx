import { useAuth } from "../../context/authContext";

import home from "./home.module.css";
import { CreatePost } from "../../components/createPost/createPost";
import { PostCard } from "../../components/postCard/postCard";
import { Modal } from "../../components/Modal/modal";

import { useState } from "react";
import { usePost } from "../../context/postContext";
import { useEffect } from "react";
import { Loader } from "../../components/loader/loader";
export const Home = ({onComment}) => {
  document.title = "ChatsterGram | Home";
  const { isLogin } = useAuth();
  const [usersFeed, setUsersFeed] = useState([]);
  const { postState, deletePost,createPost,sortPost} = usePost();
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
  const [showModal, setShowModal] = useState(false);
  const onSubmitFun = (newPost) => {
    createPost(newPost);
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
            <Modal closeModal={()=>setShowModal(false)}>
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
            <div className={home.createPost}><CreatePost user={isLogin} onSubmit={onSubmitFun} /></div>
            <div className={home.filterButtonContainer}>
            
            <button className={home.filterButton} onClick={()=>sortPost("trending")}><i className="fa-solid fa-arrow-trend-up"></i> Trending</button>
            <button className={home.filterButton} onClick={()=>sortPost("latest")}><i className="fa-solid fa-clock-rotate-left"></i>Latest</button>
            </div>
            {usersFeed.length===0 && <h2>No Posts to show</h2>}
            {postState?.sortBy && <h2 style={{fontFamily:"monospace"}}>{`${postState?.sortBy[0]?.toUpperCase(0)}${postState?.sortBy?.slice(1)}`}</h2>}
            {usersFeed.map((post, index) => (
              <PostCard
                key={index}
                post={post}
                onEdit={onEditFun}
                onDelete={onDelete}
                onComment={onComment}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};
