import { useState } from "react";

export const LoginForm = ({onFinish}) => {
    const [credentials,setCredentials]=useState({
        username:"",
        password:""
    })
    const submitHandler=(e)=>{
        e.preventDefault();
        if(typeof(onFinish)==='function')
        onFinish(credentials)
    }
    const changeHandler=(attribute,value)=>{
        setCredentials(prev=>({...prev,[attribute]:value}))
    }
  return <form>
    <input type="text"placeholder="username" id="username" onChange={e=>changeHandler("username",e.target.value)}/>
    <input type="password"placeholder="password" id="password" onChange={e=>changeHandler("password",e.target.value)}/>
    <input type="submit" placeholder="Submit" onClick={submitHandler}/>
  </form>;
};
