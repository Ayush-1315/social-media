import { useState } from "react";

import userEdit from "./updateUser.module.css";
import { Modal } from "../Modal/modal";
import { AvatarPicker } from "../avatarPicker/avatarModal";
export const UserEdit = ({
  initialData = {
    profile: "",
    firstName: "",
    lastName: "",
    bio: "",
    website: "",
  },
  onSubmit,
  onDiscard,
}) => {
  const [formData, setFormData] = useState({ ...initialData });
  const [showAvatarPick, setShowAvatarPick] = useState(false);
  const changeHandler = (type, value) => {
    setFormData((prev) => ({ ...prev, [type]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit(formData);
      e.target.reset();
    }
  };
  const discardHandler = (e) => {
    e.preventDefault();
    if (typeof onDiscard === "function") onDiscard();
  };
  const avatarPickerToggler = (e) => {
    e.preventDefault();
    setShowAvatarPick(!showAvatarPick);
  };
  const avatarSetter = (data) => {
    if (data !== null) changeHandler("profile", data);
    setShowAvatarPick(false);
  };
  return (
    <div className={userEdit?.container}>
      <form onSubmit={submitHandler}>
        <h2>Edit Profile</h2>
        <div style={{ position: "relative" }}>
          <span
            style={{
              backgroundImage: `url(${formData?.profile})`,
              display: "inline-block",
              backgroundColor: "grey",
              height: "4rem",
              width: "4rem",
              borderRadius: "50%",
            }}
            className={userEdit?.profile}
          ></span>
          {showAvatarPick && (
            <Modal closeModal={() => setShowAvatarPick(false)}>
              <AvatarPicker onSubmit={avatarSetter} />
            </Modal>
          )}
        </div>
        <button className={userEdit.selectAvatar} onClick={avatarPickerToggler}>
          Select Avatar
        </button>
        <div className={userEdit?.inputWrapper}>
          <div className={userEdit?.inputContainer}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              defaultValue={formData?.firstName}
              onChange={(e) => changeHandler("firstName", e.target.value)}
              id="firstName"
            />
          </div>
          <div className={userEdit?.inputContainer}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              defaultValue={formData?.lastName}
              onChange={(e) => changeHandler("lastName", e.target.value)}
              id="lastName"
            />
          </div>
        </div>
        <div>
          <label htmlFor="bio" className={userEdit.updtuserBio}>
            Bio
          </label>
          <textarea
            className={userEdit?.textArea}
            onChange={(e) => changeHandler("bio", e.target.value)}
            defaultValue={formData?.bio}
            id="bio"
          />
         
        </div>
        <div className={userEdit.updateUserFooter}>
            <label htmlFor="website">Website</label>
            <input
              type="url"
              id="website"
              defaultValue={formData?.website}
              onChange={(e) => changeHandler("website", e.target.value)}
            />

            <div>
              <input type="submit" value="Update" />
              <input type="reset" value="Discard" onClick={discardHandler} />
            </div>
          </div>
      </form>
    </div>
  );
};
