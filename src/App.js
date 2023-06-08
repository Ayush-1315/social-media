import logo from './logo.svg';
import './App.css';
import {useEffect }from "react";
import axios from "axios";
import Mockman from "mockman-js";
function App() {
  const getUser=async (user,pass)=>
  {
    try{
      const response=await axios.post("/api/auth/login",{username:user,password:pass})
      console.log(response)
    }
    catch (e){
      console.log(e);
    }
  }
//   useEffect(()=>{
//     (async()=>{
//     try {const response=await axios.post("/api/auth/login",{
//       username: "adarshbalika",
//     password: "adarshBalika123"
//   })
//     console.log(response)
// }
//     catch (e)
//     {
//       console.log(e)
//     }
// })()
//   },[])
getUser("adarshbalika","adarshBalika123")
  return (
    <div className="App">
      <header className="App-header">
        {/* <Mockman/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
