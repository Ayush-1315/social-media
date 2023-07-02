import { Link } from "react-router-dom";
import { useState } from "react";

import signupFormCSS from "./signup.module.css";
export const SignUpForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPass: ""
  });
  const [formValidator, setFormValidator] = useState({
    firstName: false,
    lastName: false,
    username: false,
    password: false,
    confirmPass: false,
    confirmPassEmpty: false
  });
  const {
    firstName,
    lastName,
    username,
    password,
    confirmPass,
    confirmPassEmpty
  } = formValidator;
  const changeHandler = (type, value) => {
    const inputData = value.trim();
    setFormData((prev) => ({ ...prev, [type]: inputData }));
    if (type === "confirmPass") {
      setFormValidator((prev) =>
        inputData === ""
          ? { ...prev, [type]: false, confirmPassEmpty: true }
          : {
              ...prev,
              [type]: inputData !== formData.password,
              confirmPassEmpty: false
            }
      );
    } else {
      setFormValidator((prev) => ({ ...prev, [type]: inputData === "" }));
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      const dataFilled = Object.values(formData).reduce(
        (isCorrect, curr) => (curr === "" ? false : isCorrect),
        true
      );
      const formValidated = Object.values(formValidator).reduce(
        (isCorrect, curr) => (curr ? false : isCorrect),
        true
      );
      dataFilled && formValidated
        ? onSubmit({
            firstName: formData.firstName,
            lastName: formData.lastName,
            username: formData.username,
            password: formData.password
          })
        : alert("Fill all the details");
      e.target.reset();
    }
  };
  const [showPass, setShowPass] = useState({
    password: false,
    confirm: false
  });
  return (
    <div className={signupFormCSS.formBody}>
      <h1 className={signupFormCSS.heading}>ChatsterGram</h1>
      <form onSubmit={submitHandler}>
        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          onChange={(e) => changeHandler("firstName", e.target.value)}
          className={signupFormCSS.input}
        />
        {firstName && (
          <p className={signupFormCSS.warnings}>This field is required</p>
        )}

        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          onChange={(e) => changeHandler("lastName", e.target.value)}
          className={signupFormCSS.input}
        />
        {lastName && (
          <p className={signupFormCSS.warnings}>This field is required</p>
        )}

        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={(e) => changeHandler("username", e.target.value)}
          className={signupFormCSS.input}
        />
        {username && (
          <p className={signupFormCSS.warnings}>This field is required</p>
        )}
        <div className={signupFormCSS.inputContainer}>
          <input
            type={showPass?.password ? "text" : "password"}
            placeholder="Password"
            id="password"
            onChange={(e) => changeHandler("password", e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowPass((prev) => ({ ...prev, password: !prev.password }));
            }}
          >
            {showPass?.password ? (
              <span className="material-symbols-outlined">visibility_off</span>
            ) : (
              <span className="material-symbols-outlined">visibility</span>
            )}
          </button>
        </div>
        {password && (
          <p className={signupFormCSS.warnings}>This field is required</p>
        )}
        <div className={signupFormCSS.inputContainer}>
          <input
            type={showPass?.confirm ? "text" : "password"}
            placeholder="Confirm"
            id="confirmPass"
            onChange={(e) => changeHandler("confirmPass", e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowPass((prev) => ({ ...prev, confirm: !prev.confirm }));
            }}
          >
            {showPass?.confirm ? (
              <span className="material-symbols-outlined">visibility_off</span>
            ) : (
              <span className="material-symbols-outlined">visibility</span>
            )}
          </button>
        </div>
        {confirmPassEmpty && (
          <p className={signupFormCSS.warnings}>This field is required</p>
        )}
        {confirmPass && (
          <p className={signupFormCSS.warnings}>Password doesnot match</p>
        )}
        <input type="checkbox" id="agree" defaultChecked="true" />
        <label htmlFor="agree" className="agreeLabel">
          {" "}
          Agree terms and conditions
        </label>
        <input type="submit" value="Signup" />
        <span>Already a User ?</span>
              <Link to="/login">Login</Link>
      </form>
    </div>
  );
};
