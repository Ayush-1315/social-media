import { useState } from "react";
import newPost from "./createPost.module.css";
export const CreatePost = ({ onSubmit, user }) => {

  const [userPost, setUserPost] = useState({
    message: "",
    media: ""
  });
  const changeHandler = (type, value) => {
    type !== "emoji"
      ? setUserPost((prev) => ({ ...prev, [type]: value }))
      : setUserPost((prev) => ({ ...prev, message: prev.message + value }));
  };

  const emojis = [
    {
      emoji: "😊",
      label: "smile"
    },
    {
      emoji: "😍",
      label: "heart-eyes"
    },
    {
      emoji: "😘",
      label: "kiss"
    },
    {
      emoji: "👌",
      label: "ok-hand"
    },
    {
      emoji: "😁",
      label: "smiling-eyes"
    },
    {
      emoji: "❤️",
      label: "red-heart"
    },
    {
      emoji: "😂",
      label: "tears-of-joy"
    },
    {
      emoji: "😎",
      label: "sunglasses"
    },
    {
      emoji: "😉",
      label: "winking-face"
    },
    {
      emoji: "✌️",
      label: "victory-hand"
    },
    {
      emoji: "👍",
      label: "thumbs-up"
    },
    {
      emoji: "🙂",
      label: "slightly-smiling-face"
    },
    {
      emoji: "💕",
      label: "two-hearts"
    },
    {
      emoji: "😑",
      label: "expressionless-face"
    },
    {
      emoji: "🥰",
      label: "smiling-face-with-hearts"
    },
    {
      emoji: "🫥",
      label: "dotted-line-face"
    }
  ];
  const submitHandler = () => {
    if (typeof onSubmit === "function") onSubmit({content:userPost});
    setUserPost({
      message: "",
      media: ""
    });
  };
  const [showEmojiBox, setEmojiBoxs] = useState(false);
  const resetFileInput = () => {
    setUserPost({ ...userPost, media: "" });
    document.getElementById("postImage").value = "";
  };
  return (
    <div className={newPost.box}>
      <div className={newPost.header}>
        <div
          className={newPost.profilePic}
          style={{ backgroundImage: `url(${user?.profile})` }}
        >
          {user?.profile===undefined && <span className={newPost.profileText}>{user?.username[0].toUpperCase()}</span>}
        </div>
        <textarea
          name="postText"
          id="postText"
          cols="30"
          rows="10"
          placeholder="What's on your mind ?"
          className={newPost.textBox}
          onChange={(e) => changeHandler("message", e.target.value)}
          value={userPost.message}
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
                url: URL.createObjectURL(e.target.files[0])
              };
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
              <span>{userPost?.media?.name}</span>
              <button onClick={resetFileInput}>X</button>
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
          disabled={userPost.message === "" && userPost.media === ""}
          onClick={() => submitHandler()}
          className={newPost.postBtn}
        >
          Post
        </button>
      </div>
    </div>
  );
};
