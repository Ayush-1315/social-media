import postCardCSS from "./postCard.module.css";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { usePost } from "../../context/postContext";
export const PostCard = ({ post,onEdit,onDelete }) => {
  const navigate = useNavigate();
  const { allUsers } = useUser();
  const {likePost,dislikePost}=usePost();
  const {isLogin}=useAuth();
  const { content, likes, username, _id,createdAt} = post;
  const postCreator = allUsers.find(
    ({ username: searchUser }) => searchUser === username
  );
  const { firstName, lastName, _id: postCreatorId } = postCreator;
  const postClickHandler = () => {
    navigate(`/posts/${_id}`);
  };
  const [showOptions,setShowOptions]=useState(false);
  const showOptionsFun=()=>setShowOptions(!showOptions)
  
  const navigateToProfile=()=>{
    navigate(`/user/${postCreatorId}`)
  }
  const editHandler=()=>{
    if(typeof(onEdit)==='function'){
      onEdit({...content,_id});
      setShowOptions(false)
    }
  }
  const deleteHandler=()=>{
    if(typeof(onDelete)==='function'){
      onDelete(_id);
      setShowOptions(false)
    }
  }
  const likedByUser=()=>likes?.likedBy?.reduce((liked,{username})=>username===isLogin?.username?true:liked,false)
  return (
    <div className={postCardCSS.card}>
      <div className={postCardCSS.cardHead}>
        <div className={postCardCSS.profileContainer} onClick={navigateToProfile}>
          {postCreator?.profile !== "" && (
            <span
              className={postCardCSS.profile}
              style={{ backgroundImage: `url(${postCreator.profile})` }}
            ></span>
          )}
           {postCreator?.profile==="" && (
            <span
              className={postCardCSS.profileText}
            >{username[0].toUpperCase()}</span>
          )}
          <div>
            <p>{`${firstName} ${lastName}`}</p>
            <p>@{username}</p>
          </div>
          <div>{new Date(createdAt).toDateString().split(" ").slice(1,4).join(" ")}</div>
        </div>

        <div className={postCardCSS.headerOptions}>
          {isLogin?.username ===username &&<span className="material-symbols-outlined postMoreOptions" onClick={showOptionsFun}>
            more_vert
          </span>}
          {showOptions && <div className={postCardCSS.moreOptions}>
            <ul>
              <li className={postCardCSS.postOptions} onClick={editHandler}>Edit</li>
              <li className={postCardCSS.postOptions} onClick={deleteHandler}>Delete</li>
            </ul>
          </div>}
        </div>
      </div>
      <div className={postCardCSS.cardBody} onClick={postClickHandler}>
        <p>{content?.message}</p>
        <div className={postCardCSS.imageContainer}>
          {content?.media?.type === "image" && (
            <img src={content?.media?.url} alt={_id} />
          )}
        </div>
      </div>
      <div className={postCardCSS.cardFoot}>
        <div>
          <p>{likes?.likeCount}</p>
          {likedByUser()?<button onClick={()=>dislikePost(_id)}> Liked</button>:<button onClick={()=>likePost(_id)}>Like</button>}
        </div>
        <button>Bookmark</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};
