import { useState } from "react";
import avatars from "../../../backend/db/avatars";
import avatarCSS from "./avatar.module.css";
export const AvatarPicker = ({ onSubmit }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const changeHandler = (e) => setSelectedAvatar(e.target.value);
  const submitHandler=(e)=>{
    e.preventDefault()
    if(typeof(onSubmit)==="function"){    
        onSubmit(selectedAvatar);
        setSelectedAvatar(null);
    }
  }
  return (
    <div>
      <div className={avatarCSS?.avatarPicker}>
        {avatars.map((avatar, index) => (
          <span key={index}>
            {" "}
            <label htmlFor={avatar}>
              <span
                className={avatarCSS?.avatarPick}
                style={{ backgroundImage: `url(${avatar})` }}
              ></span>
            </label>
            <input
              type="radio"
              id={avatar}
              value={avatar}
              name="avatar"
              onChange={changeHandler}
            />
          </span>
        ))}
      </div>
        <button onClick={submitHandler}>Select</button>
    </div>
  );
};
