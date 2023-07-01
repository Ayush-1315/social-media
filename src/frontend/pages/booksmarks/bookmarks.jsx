import { useEffect,useState } from "react";

import { useAuth } from "../../context/authContext";
import { getAllBookmarksService } from "../../services/postsService";
import { usePost } from "../../context/postContext";
import { Loader } from "../../components/loader/loader";
import { PostCard } from "../../components/postCard/postCard";
import { Modal } from "../../components/Modal/modal";
import { CreatePost } from "../../components/createPost/createPost";
export const BookmarksPage = ({onComment}) => {
  const { isLogin, encodedToken } = useAuth();
  const { postState,deletePost,createPost} = usePost();
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.title = "ChatsterGram | Bookmarks";
    (async () => {
      setIsLoading(true);
      try {
        const response = await getAllBookmarksService(encodedToken);
        setIsLoading(false);
        if (response?.status === 200) {
          setBookmarks(
            postState?.posts?.filter(({ _id }) =>
              response?.data?.bookmarks.includes(_id)
            )
          );
        } else throw response;
      } catch (e) {
        console.error(e);
      }
    })();
  }, [isLogin,postState,encodedToken]);
  const onSubmitFun = (newPost) => {
    createPost(newPost);
    console.log(newPost);
    setShowModal(false);
  };
  const onEditFun = (data) => {
    setEditPost(data);
    setShowModal(true);
  };
  const onEditPost = () => {
    setShowModal(false);
  };
  const onDelete = (postId) => deletePost(postId);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : bookmarks.length === 0 ? (
        <h2>No bookmarks yet</h2>
      ) : (
        <>
          {showModal && (
            <Modal closeModal={()=>setShowModal(false)}>
              <CreatePost
                user={isLogin}
                onSubmit={onSubmitFun}
                initialData={editPost}
                onEdit={onEditPost}
                isEdit="true"
              />
            </Modal>
          )}
          <div>
          <h2>Bookmarks</h2>
        {bookmarks.map((post,index)=><PostCard post={post} key={index} onEdit={onEditFun} onDelete={onDelete} onComment={onComment}/>)}
          </div>
        </>
      )}
    </>
  );
};
