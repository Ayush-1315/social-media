import { useState } from "react";
import {Link} from "react-router-dom";
export const LoginForm = ({onFinish,signupRoute}) => {
    const [credentials,setCredentials]=useState({
        username:"",
        password:""
    })
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(credentials);
        if(typeof(onFinish)==='function')
        onFinish(credentials)
    }
    const changeHandler=(attribute,value)=>{
        setCredentials(prev=>({...prev,[attribute]:value}))
    }
  return <form>
    <input type="text"placeholder="username" id="username" onChange={e=>changeHandler("username",e.target.value)}/>
    <input type="password"placeholder="password" id="password" onChange={e=>changeHandler("password",e.target.value)}/>
    <Link to={signupRoute}>Create New Account</Link>
    <input type="submit" placeholder="Submit" onClick={submitHandler}/>
  </form>;
};
