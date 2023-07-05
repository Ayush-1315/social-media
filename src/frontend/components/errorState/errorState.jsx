import error from "../../assets/error.avif";
import errorCSS from "./errorState.module.css";
export const ErrorState = ({ message }) => {
  return (
    <div className={errorCSS.error}>
      <div
        style={{ backgroundImage: `url(${error})` }}
        className={errorCSS.errorImage}
      ></div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};
