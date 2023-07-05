import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";

import { AuthProvider } from "./frontend/context/authContext";
import { UserProvider } from "./frontend/context/userContext";
import { PostProvider } from "./frontend/context/postContext";
import { BookmarksProvider } from "./frontend/context/bookmarksContext";

makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        <PostProvider>
          <BookmarksProvider>        
            <App />
          </BookmarksProvider>  
        </PostProvider>
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
