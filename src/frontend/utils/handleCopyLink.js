import { errorToast, notifyToast } from "../../App";

export const handleCopyLink = (postId) => {
    navigator.clipboard
      .writeText(`https://chatsergram.netlify.app/post/${postId}`)
      .then(() => {
        console.log("Link copied to clipboard!");
        notifyToast("Link copied successfully!");
      })
      .catch((error) => {
        console.error("Failed to copy link to clipboard", error);
        errorToast("Failed to copy link...Try again.");
      });
  };
  