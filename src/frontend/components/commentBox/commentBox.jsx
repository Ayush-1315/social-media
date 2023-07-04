import { useState } from "react";

import {emojis} from "../createPost/createPostEmojis";
import commentCSS from "./commentBox.module.css";
export const CommentBox = ({onSubmit}) => {
  const [comment, setComment] = useState("");
  const [showEmojiBox, setShowEmojiBox] = useState(false);
  const changeHangler = (type, value) => {
    setComment((prev) => (type === "emoji" ? prev + value : value));
  };
  const submitHandler=()=>{
    if(typeof(onSubmit)==="function"){
      comment!==""?onSubmit(comment):alert('Enter comment');
    }
  }
  const emojiBoxToggle=()=>setShowEmojiBox(!showEmojiBox);
  return (
    <div className={commentCSS.commentBox}>
      <h2>Comment</h2>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Add comment"
        onChange={(e) => changeHangler("comment", e.target.value)}
        value={comment}
        className={commentCSS.textArea}
      ></textarea>
      <span onClick={emojiBoxToggle} className=" emoji">
        <span className="material-symbols-outlined">mood</span>
      </span>
      {showEmojiBox && <div className={commentCSS.emojiBox}>
        {emojis.map((emojiData, index) => (
          <span
            key={index}
            onClick={(e) => changeHangler("emoji", emojiData?.emoji)}
          >
            {emojiData?.emoji}
          </span>
        ))}
      </div>}
      <button onClick={submitHandler}>Comment</button>
    </div>
  );
};
