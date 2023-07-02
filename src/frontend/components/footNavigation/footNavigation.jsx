import { Link } from "react-router-dom";
import footNav from "./footNav.module.css";
export const FootNav = ({ onCreatePost }) => {
  return (
    <div className={footNav.container}>
      <Link to="/home">
        <span>
          <i className="fa-solid fa-house"></i>
        </span>
      </Link>
      <Link to="/explore">
        <span>
          <i className="fa-solid fa-compass"></i>
        </span>
      </Link>
      <span onClick={() => onCreatePost()}>
        <i className="fa-solid fa-circle-plus"></i>
      </span>
      <Link to="/bookmarks">
        <span>
          <i className="fa-solid fa-bookmark"></i>
        </span>
      </Link>
      <Link to="/liked">
        <span>
          <i className="fa-solid fa-heart"></i>
        </span>
      </Link>
    </div>
  );
};
