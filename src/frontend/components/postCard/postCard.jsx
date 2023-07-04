import postCardCSS from "./postCard.module.css";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { usePost } from "../../context/postContext";
import { useBookmarks } from "../../context/bookmarksContext";
import { handleCopyLink } from "../../utils/handleCopyLink";
export const PostCard = ({ post, onEdit, onDelete,onComment}) => {
  const navigate = useNavigate();
  const { allUsers } = useUser();
  const { likePost, dislikePost } = usePost();
  const { bookmarkPost, bookmarkState, removeBookmark } = useBookmarks();
  const { isLogin } = useAuth();
  const { content, likes, username, _id, createdAt } = post;
  const postCreator = allUsers.find(
    ({ username: searchUser }) => searchUser === username
  );
  const { firstName, lastName, _id: postCreatorId } = postCreator;
  const postClickHandler = () => {
    navigate(`/posts/${_id}`);
  };
  const [showOptions, setShowOptions] = useState(false);
  const showOptionsFun = () => setShowOptions(!showOptions);

  const navigateToProfile = () => {
    navigate(`/user/${postCreatorId}`);
  };
  const editHandler = () => {
    if (typeof onEdit === "function") {
      onEdit({ ...content, _id });
      setShowOptions(false);
    }
  };
  const deleteHandler = () => {
    if (typeof onDelete === "function") {
      onDelete(_id);
      setShowOptions(false);
    }
  };
  const likedByUser = () =>
    likes?.likedBy?.reduce(
      (liked, { username }) => (username === isLogin?.username ? true : liked),
      false
    );
  const commentHandler=(id)=>onComment(id);
  return (
    <div className={postCardCSS.card}>
      <div className={postCardCSS.cardHead}>
        <div
          className={postCardCSS.profileContainer}
          onClick={navigateToProfile}
        >
          {postCreator?.profile !== "" && (
            <span
              className={postCardCSS.profile}
              style={{ backgroundImage: `url(${postCreator.profile})` }}
            ></span>
          )}
          {postCreator?.profile === "" && (
            <span className={postCardCSS.profileText}>
              {username[0].toUpperCase()}
            </span>
          )}
          <div>
            <p>{`${firstName} ${lastName}`}</p>
            <p>@{username}</p>
          </div>
          
        </div>
        <span>
            {new Date(createdAt)
              .toDateString()
              .split(" ")
              .slice(1, 4)
              .join(" ")}
          </span>
        <div className={postCardCSS.headerOptions}>
       
          {isLogin?.username === username && (
            <span
              className="material-symbols-outlined postMoreOptions"
              onClick={showOptionsFun}
            >
              more_vert
            </span>
          )}
          {showOptions && (
            <div className={postCardCSS.moreOptions}>
              <ul>
                <li className={postCardCSS.postOptions} onClick={editHandler}>
                <i className="fa-solid fa-pen-to-square"></i> Edit
                </li>
                <li className={postCardCSS.postOptions} onClick={deleteHandler}>
                <i className="fa-solid fa-trash"></i>Delete
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={postCardCSS.cardBody} onClick={postClickHandler}>
        <p>{content?.message}</p>
        <div className={postCardCSS.imageContainer}>
          {content?.media?.type === "image" && (
            <img src={content?.media?.url} alt={_id} />
          )}
         <div onClick={e=>e.preventDefault()}>
         {content?.media?.type==="video" && <video controls className={postCardCSS.video}>
            <source src={content?.media?.url} type="video/mp4"></source>
            </video>}
         </div>
          
        </div>
      </div>
      <div className={postCardCSS.cardFoot}>
        <div>
          {likedByUser() ? (
            <button onClick={() => dislikePost(_id)}>
              {" "}
              Liked<i className="fa-solid fa-thumbs-up"></i>
            </button>
          ) : (
            <button onClick={() => likePost(_id)}>
              Like <i className="fa-regular fa-thumbs-up"></i>
            </button>
          )}
          <span className={postCardCSS.likeCount}>{likes?.likeCount}</span>
        </div>
        {bookmarkState?.bookmarks.includes(_id) ? (
          <button onClick={() => removeBookmark(_id)}>Bookmarked <i className="fa-solid fa-bookmark"></i></button>
        ) : (
          <button onClick={() => bookmarkPost(_id)}>Bookmark <i className="fa-regular fa-bookmark"></i></button>
        )}
        <button onClick={()=>commentHandler(_id)}>Comment <i className="fa-regular fa-comment"></i></button>
        <button onClick={() => handleCopyLink(_id)}>Share <i className="fa-solid fa-share"></i></button>
      </div>
    </div>
  );
};
