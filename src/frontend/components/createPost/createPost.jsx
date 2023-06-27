import { useState } from "react";

import { emojis } from "./createPostEmojis";
import { usePost } from "../../context/postContext";
import newPost from "./createPost.module.css";

export const CreatePost = ({ onSubmit, user, initialData={message:"",media:"",_id:""},onEdit,isEdit}) => {
  const [userPost, setUserPost] = useState({...initialData});
  const {editPost}=usePost();
  const changeHandler = (type, value) => {
    
   if(userPost?._id!=="")
    {
      type !== "emoji"
    ? setUserPost({ ...userPost, [type]: value })
    : setUserPost({ ...userPost,  message:userPost.message + value })
    
  }

    else{
      type !== "emoji"
      ? setUserPost((prev) => ({ ...prev, [type]: value }))
      : setUserPost((prev) => ({ ...prev, message: prev.message + value }));
    }

   }
  const submitHandler = () => {
    if (initialData?._id!==""){
      onEdit();
      editPost(initialData?._id,{message:userPost?.message,media:{...userPost?.media}},JSON.parse(localStorage.getItem("user")).encodedToken)
    }
    else if (typeof( onSubmit === "function")){
      console.log(userPost)
      onSubmit({ content:{message:userPost?.message,media:{...userPost?.media}} })
    };
    setUserPost({
      message: "",
      media: "",
    });
  };
  const [showEmojiBox, setEmojiBoxs] = useState(false);
  const resetFileInput = () => {
    setUserPost(prev=>({ ...prev, media: "" }));
    document.getElementById("postImage").value = "";
  };

  return (
    <div className={newPost.box}>
      <div className={newPost.header}>
        <div
          className={newPost.profilePic}
          style={{ backgroundImage: `url(${user?.profile})` }}
        >
          {user?.profile === undefined && (
            <span className={newPost.profileText}>
              {user?.username[0].toUpperCase()}
            </span>
          )}
        </div>
        <textarea
          name="postText"
          id="postText"
          cols="30"
          rows="10"
          placeholder="What's on your mind ?"
          className={newPost.textBox}
          onChange={(e) => changeHandler("message", e.target.value)}
          value={userPost?.message}
        ></textarea>
      </div>
      <div className={newPost.footer}>
        <div>
          <label htmlFor="postImage">
            {" "}
            <span className="material-symbols-outlined custom">imagesmode</span>
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg, video/mp4"
            id="postImage"
            onChange={(e) => {
              const media = {
                name: e.target.files[0].name,
                type: e.target.files[0].type.slice(
                  0,
                  e.target.files[0].type.lastIndexOf("/")
                ),
                size: e.target.files[0].size,
                url: URL.createObjectURL(e.target.files[0]),
              };
              console.log({isEdit})
              changeHandler("media", media);
            }}
          />
          
          <span
            className="material-symbols-outlined custom"
            onClick={() => setEmojiBoxs(!showEmojiBox)}
          >
            mood
          </span>
          {userPost?.media?.name && (
            <div className={newPost.fileChip}>
              <>
                <span>{userPost?.media?.name}</span>
                <button onClick={resetFileInput}>X</button>
              </>{" "}
            </div>
          )}
        </div>

        <div
          className={newPost.emojiBox}
          style={{ display: showEmojiBox ? "flex" : "none" }}
        >
          <div>
            {emojis?.map(({ emoji, lable }, index) => (
              <button
                key={index}
                onClick={() => changeHandler("emoji", emoji)}
                className={newPost.emojiButtons}
              >
                <span role="img" aria-label={lable}>
                  {emoji}
                </span>
              </button>
            ))}
          </div>
          <div>
            <button onClick={() => setEmojiBoxs(false)}>X</button>
          </div>
        </div>
        <button
          disabled={userPost?.message === "" && userPost?.media === ""}
          onClick={() => submitHandler()}
          className={newPost.postBtn}
        >
          Post
        </button>
      </div>
    </div>
  );
};
