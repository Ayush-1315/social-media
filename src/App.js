import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Mockman from "mockman-js";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route, useLocation } from "react-router";

import { Home } from "./frontend/pages/home/home";
import { LoginPage } from "./frontend/pages/login/login";
import { PrivateRoute } from "./frontend/components/PrivateRoute/privateRoute";
import { SignupPage } from "./frontend/pages/signup/signup";
import { LandingPage } from "./frontend/pages/Landing Page/landingPage";
import { ExplorerPage } from "./frontend/pages/explorer/explorer";
import { BookmarksPage } from "./frontend/pages/booksmarks/bookmarks";
import { Profile } from "./frontend/pages/Profile Page/profile";
import { Navbar } from "./frontend/components/navbar/navbar";
import { Sidebar } from "./frontend/components/sidebar/sidebar";
import { Asidebar } from "./frontend/components/asidebar/asidebar";
import { Suggestions } from "./frontend/components/suggestions/suggestions";
import { UserPage } from "./frontend/pages/user Page/userPage";
import { LikedPostPage } from "./frontend/pages/Liked Posts/likedPosts";
import { PostPage } from "./frontend/pages/post Page/postPage";
import { useState } from "react";
import { CommentBox } from "./frontend/components/commentBox/commentBox";
import { Modal } from "./frontend/components/Modal/modal";
import { usePost } from "./frontend/context/postContext";
import { CreatePost } from "./frontend/components/createPost/createPost";
import { useAuth } from "./frontend/context/authContext";
import { FootNav } from "./frontend/components/footNavigation/footNavigation";

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
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [showCreatePost,setShowCreatePost]=useState(false);
  const [commentPostId, setCommentPostId] = useState(null);
  const currenntLocation = useLocation().pathname;
  const {addComment,createPost} =usePost();
  const {isLogin}=useAuth();
  const showComponents =
    currenntLocation !== "/" &&
    currenntLocation !== "/login" &&
    currenntLocation !== "/signup" &&
    currenntLocation !== "/mockman";
  const clickComment = (postId) => {
    if (postId !== "") {
      setCommentPostId(postId);
      setShowCommentBox(true);
    }
  };
  const commentSubmit=(data)=>{
    if(data!==""){
      addComment(commentPostId,data);
      setCommentPostId(null);
      setShowCommentBox(false)
    }
  }
  const onSubmitFun = (newPost) => {
    createPost(newPost);
    setShowCreatePost(false);
  };
  return (
    <div className="App">
      {showComponents && <Navbar />}
      <div className="page">
        {showComponents && <Sidebar onCreatePost={()=>setShowCreatePost(true)}/>}
        <div className="content">
          {showCommentBox && (
            <Modal closeModal={()=>setShowCommentBox(false)}>
              <CommentBox onSubmit={commentSubmit}/>
            </Modal>
          )}
          {showCreatePost && <Modal closeModal={()=>setShowCreatePost(false)}>
            <CreatePost user={isLogin} onSubmit={onSubmitFun}/>
            </Modal>}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/mockman" element={<Mockman />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home onComment={(id) => clickComment(id)} />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile onComment={(id) => clickComment(id)}/>
                </PrivateRoute>
              }
            />
            <Route
              path="/explore"
              element={
                <PrivateRoute>
                  <ExplorerPage onComment={(id) => clickComment(id)}/>
                </PrivateRoute>
              }
            />
            <Route
              path="/bookmarks"
              element={
                <PrivateRoute>
                  <BookmarksPage onComment={(id) => clickComment(id)} />
                </PrivateRoute>
              }
            />
            <Route
              path="/liked"
              element={
                <PrivateRoute>
                  <LikedPostPage onComment={(id) => clickComment(id)} />
                </PrivateRoute>
              }
            />
            <Route
              path="/user/:user"
              element={
                <PrivateRoute>
                  <UserPage onComment={(id) => clickComment(id)}/>
                </PrivateRoute>
              }
            />
            <Route
              path="/posts/:pId"
              element={
                <PrivateRoute>
                  <PostPage onComment={(id) => clickComment(id)}/>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        {showComponents && <Asidebar component={<Suggestions />} />}
      </div>
    {showComponents &&  <div><FootNav onCreatePost={()=>setShowCreatePost(true)}/></div>}
      <ToastContainer />
    </div>
  );
}

export default App;
