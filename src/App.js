import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Mockman from "mockman-js";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route,useLocation} from "react-router";

import { Home } from "./frontend/pages/home/home";
import { LoginPage } from "./frontend/pages/login/login";
import { PrivateRoute } from "./frontend/components/PrivateRoute/privateRoute";
import { SignupPage } from "./frontend/pages/signup/signup";
import { LandingPage } from "./frontend/pages/Landing Page/landingPage";
import { ExplorerPage } from "./frontend/pages/explorer/explorer";
import {BookmarksPage} from "./frontend/pages/booksmarks/bookmarks";
import { Profile } from "./frontend/pages/Profile Page/profile";
import { Navbar } from "./frontend/components/navbar/navbar";
import { Sidebar } from "./frontend/components/sidebar/sidebar";
import { Asidebar } from "./frontend/components/asidebar/asidebar";
import { Suggestions } from "./frontend/components/suggestions/suggestions";
import { UserPage } from "./frontend/pages/user Page/userPage";
import { LikedPostPage } from "./frontend/pages/Liked Posts/likedPosts";
import { PostPage } from "./frontend/pages/post Page/postPage";

export const notifyToast = (message) => {
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
export const errorToast = (message) => {
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
};
function App() {
  const currenntLocation=useLocation().pathname
  const showComponents=(currenntLocation!=="/" && currenntLocation!=="/login" && currenntLocation!=="/signup" && currenntLocation!=="/mockman");
  return (
    <div className="App">
      {showComponents && <Navbar/>}
     <div className="page">
      {showComponents && <Sidebar/>}
     <div className="content">
     <Routes>
      
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <ExplorerPage/>
            </PrivateRoute>
          }
        />
         <Route
          path="/bookmarks"
          element={
            <PrivateRoute>
              <BookmarksPage/>
            </PrivateRoute>
          }
        />
          <Route
          path="/liked"
          element={
            <PrivateRoute>
              <LikedPostPage/>
            </PrivateRoute>
          }
        />
          <Route
          path="/user/:user"
          element={
            <PrivateRoute>
              <UserPage/>
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:pId"
          element={
            <PrivateRoute>
              <PostPage />
            </PrivateRoute>
          }
        />
      </Routes>
     </div>
      {showComponents && <Asidebar component={<Suggestions/>}/>}
     </div>
      <ToastContainer />
    </div>
  );
}

export default App;
