import { createContext, useContext } from "react";
import { useAuth } from "./authContext";
import {
  createPostService,
  deletePostService,
  dislikePostService,
  editPostService,
  getAllPosts,
  getUserPostsService,
  likePostService,
} from "../services/postsService";
import { useReducer } from "react";
import { initialPostState, postReducer } from "../reducers/post-reducer";
import { useEffect } from "react";
const PostContext = createContext();
export const PostProvider = ({ children }) => {
  const { encodedToken, isLogin } = useAuth();
  const [postState, postDispatch] = useReducer(postReducer, initialPostState);
  const getUserPosts = async (username) => {
    postDispatch({ type: "USER_POST", payload: [] });
    try {
      const response = await getUserPostsService(username);
      if (response?.status === 200) {
        postDispatch({ type: "USER_POST", payload: response?.data?.posts });
      } else throw response;
    } catch (e) {
      console.error(e);
    }
  };

  const editPost = async (postId, postData) => {
    try {
      const response = await editPostService(
        postId,
        { content: { ...postData } },
        encodedToken
      );
      if (response?.status === 201) {
        postDispatch({ type: "SET_POSTS", payload: response?.data?.posts });
        postDispatch({
          type: "USER_POST",
          payload: response?.data?.posts?.filter(
            ({ username }) => username === isLogin?.username
          ),
        });
      } else throw response;
    } catch (e) {
      console.error(e);
    }
  };
  const deletePost = async (postId) => {
    try {
      const response = await deletePostService(postId, encodedToken);
      if (response?.status === 201) {
        postDispatch({ type: "SET_POSTS", payload: response?.data?.posts });
        postDispatch({
          type: "USER_POST",
          payload: response?.data?.posts?.filter(
            ({ username }) => username === isLogin?.username
          ),
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const createPost = async (postData) => {
    try {
      const response = await createPostService({...postData,comments:[]}, encodedToken);
      if (response?.status === 201) {
        postDispatch({ type: "SET_POSTS", payload: response?.data?.posts });
      }
    } catch (e) {}
  };
  const sortPost = (value) => {
    postDispatch({ type: "SORT_BY", payload: value });
  };
  const likePost = async (postId) => {
    try {
      const response = await likePostService(postId, encodedToken);
      if (response?.status === 201) {
        postDispatch({ type: "SET_POSTS", payload: response?.data?.posts });
        postDispatch({
          type: "USER_POST",
          payload: response?.data?.posts?.filter(
            ({ username }) => username === isLogin?.username
          ),
        });
      } else throw response;
    } catch (e) {
      console.error(e);
    }
  };

  const dislikePost = async (postId) => {
    try {
      const response = await dislikePostService(postId, encodedToken);
      if (response?.status === 201) {
        postDispatch({ type: "SET_POSTS", payload: response?.data?.posts });
        postDispatch({
          type: "USER_POST",
          payload: response?.data?.posts?.filter(
            ({ username }) => username === isLogin?.username
          ),
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
const addComment=(postId,comment)=>{
const post=postState?.posts?.find(({_id})=>_id===postId);
if(post!==undefined){
  const data={
    _id:isLogin._id,
    username:isLogin.username,
    firstName:isLogin.firstName,
    lastName:isLogin.lastName,
    comment
  }
  postDispatch({type:"SET_POSTS",payload:postState?.posts?.map(post=>{
    return post._id===postId?({...post,comments:[...post.comments,data]}):post})})
}
}

  useEffect(() => {
    if (encodedToken) {
      (async () => {
        postDispatch({ type: "POST_LOADING", payload: true });
        try {
          const { status, data } = await getAllPosts();
          if (status === 200) {
            postDispatch({ type: "SET_POSTS", payload: data?.posts });
            postDispatch({ type: "POST_LOADING", payload: false });
          }
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [isLogin, encodedToken]);
  return (
    <PostContext.Provider
      value={{
        editPost,
        postState,
        getUserPosts,
        deletePost,
        createPost,
        sortPost,
        likePost,
        dislikePost,
        addComment
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export const usePost = () => useContext(PostContext);
