import { createContext,useContext } from "react";
import { bookmarkPostService, removeBookmarkPostService } from "../services/postsService";
import { useAuth } from "./authContext";
import { useReducer } from "react";
import { bookmarksReducer, initialBookmarks } from "../reducers/bookmark-reducer";
const BookmarksContext=createContext();
export const BookmarksProvider=({children})=>{
    const [bookmarkState,bookmarkDispatch]=useReducer(bookmarksReducer,initialBookmarks);
    const {encodedToken}=useAuth()
    const bookmarkPost=async(postId)=>{
        try{
            const response=await bookmarkPostService(postId,encodedToken);
            if(response?.status===200){
                bookmarkDispatch({type:"UPDATE_BOOKMARKS",payload:response?.data?.bookmarks})
            }
            else throw response
        }
        catch(e){
            console.error(e);
        }
      }
    const removeBookmark=async(postId)=>{
        try{
            const response=await removeBookmarkPostService(postId,encodedToken);
            if(response?.status===200){
                bookmarkDispatch({type:"UPDATE_BOOKMARKS",payload:response?.data?.bookmarks})
            }
            else throw response
        }
        catch(e){
            console.error(e);
        }
    }
    return <BookmarksContext.Provider value={{bookmarkPost,bookmarkState,removeBookmark}}>
        {children}
    </BookmarksContext.Provider>
}
export const useBookmarks=()=>useContext(BookmarksContext);