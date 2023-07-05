import React from "react";
import loader from "./loader.module.css"; // Import the CSS file for styling

export const Loader = () => {
  return (
    <div className={loader.loaderContainer}>
      <div className={loader.loader}>
        <div className={`${loader.dot} ${loader.dot1}`}></div>
        <div className={`${loader.dot} ${loader.dot2}`}></div>
        <div className={`${loader.dot} ${loader.dot3}`}></div>
      </div>
      <div className={loader.loadingText}>Loading...</div>
    </div>
  );
};
