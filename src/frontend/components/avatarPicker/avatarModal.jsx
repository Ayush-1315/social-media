import { useState } from "react";
import avatars from "../../../backend/db/avatars";
import avatarCSS from "./avatar.module.css";
export const AvatarPicker = ({ onSubmit }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [file, setFile] = useState(null);
  const changeHandler = (e) => setSelectedAvatar(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit(selectedAvatar);
      setSelectedAvatar(null);
    }
  };
  const uploadHandler = (url) => {
    setFile(url);
    setSelectedAvatar(url);
  };

  return (
    <div className={avatarCSS.avatarContainer}>
      <div className={avatarCSS?.avatarPicker}>
        {avatars.map((avatar, index) => (
          <span key={index}>
            {" "}
            <label htmlFor={avatar}>
              <span
                className={
                  selectedAvatar === avatar
                    ? avatarCSS.selectedAvatar
                    : avatarCSS?.avatarPick
                }
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
        <input
          type="file"
          onChange={(e) =>
            uploadHandler(URL.createObjectURL(e.target.files[0]))
          }
          id="fileUpload"
        />
        <label htmlFor="fileUpload">
          <span
            className={avatarCSS.upload}
            style={{ backgroundImage: file !== null ? `url(${file})` : "" }}
          >
            {!file && <span className="material-symbols-outlined">add</span>}
          </span>
        </label>
      </div>
      <button onClick={submitHandler}>Select</button>
    </div>
  );
};
