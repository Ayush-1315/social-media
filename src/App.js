import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Mockman from "mockman-js";
import { ToastContainer, toast } from 'react-toastify';
import { Routes,Route } from "react-router";

import { Home } from "./frontend/pages/home/home";
import { LoginPage } from "./frontend/pages/login/login";
import { PrivateRoute } from "./frontend/components/PrivateRoute/privateRoute";
import { SignupPage } from "./frontend/pages/signup/signup";
import {LandingPage} from "./frontend/pages/Landing Page/landingPage"

export const notifyToast=(message)=>{
  toast.success(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      });
};
export const errorToast=(message)=>{
  toast.error(message, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
    });
}
function App() {
  return <div className="App">
    <Routes>
      <Route path="/home" element={
 <PrivateRoute>
  <Home/>
 </PrivateRoute>
      }/>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/mockman" element={<Mockman/>}/>
    </Routes>
    <ToastContainer/>
  </div>;
}

export default App;
