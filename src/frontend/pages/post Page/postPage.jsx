import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { useAuth } from "../../context/authContext";
import postPageCSS from "./postPage.module.css";
import { PostCard } from "../../components/postCard/postCard";
import { Modal } from "../../components/Modal/modal";
import { CreatePost } from "../../components/createPost/createPost";
import { usePost } from "../../context/postContext";
import { useUser } from "../../context/userContext";
import { Loader } from "../../components/loader/loader";

export const PostPage = ({onComment}) => {
  document.title = "ChatsterGram | Post";
  const { pId } = useParams();
  const { isLogin } = useAuth();
  const navigate = useNavigate();
  const [currentPost, setCurrentPost] = useState(null);
  const { allUsers } = useUser();
  const { deletePost, createPost,postState } = usePost();
  const [showModal, setShowModal] = useState(false);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    setIsLoading(true);
    if (isLogin) {
      // (async () => {
      //   try {
      //     const response = await getPostService(pId);
      //     if (response?.status === 200) {
      //       setCurrentPost(response?.data?.post);
      //       setIsLoading(false);
      //     } else throw response;
      //   } catch (e) {
      //     console.log(e);
      //     setIsLoading(false);
      //   }
      // })();
      if(pId!==""){
        setCurrentPost(postState?.posts?.find(({_id})=>_id===pId))
        setIsLoading(false);
      }
    }
  }, [pId, isLogin,postState]);
  const onSubmitFun = (newPost) => {
    createPost(newPost);
    console.log(newPost);
    setShowModal(false);
  };

  const [editPost, setEditPost] = useState(null);
  const onEditFun = (data) => {
    setEditPost(data);
    setShowModal(true);
  };
  const onEditPost = () => {
    setShowModal(false);
  };
  const onDelete = (postId) => deletePost(postId);
  const commentUsers = allUsers.filter(({ username }) =>
    currentPost?.comments?.reduce(
      (isCommentMade, { username: commentor }) =>
        commentor === username ? true : isCommentMade,
      false
    )
  );
const clickHandler=(userId)=>navigate(`/user/${userId}`);
console.log(currentPost);
  return (
    <>
    {isLoading?<Loader/>:<>
    
    {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
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
        {currentPost && (
          <>
            <PostCard
              post={currentPost}
              onEdit={onEditFun}
              onDelete={onDelete}
              onComment={onComment}
            />
            <div>
              <div>Comments</div>
              <div>
                {currentPost?.comments?.length === 0 ? (
                  "No comments yet"
                ) : (
                  <>
                    {currentPost?.comments?.map((user, index) => {
                      const thisUser = commentUsers?.find(
                        ({ username }) => username === user?.username
                      );
                      return (
                        <div key={index}>
                          <div onClick={()=>clickHandler(thisUser?._id)}>
                            <span
                              className={postPageCSS.profile}
                              style={{
                                backgroundImage: `url(${thisUser?.profile})`,
                              }}
                            ></span>
                            <div>
                              <p>
                                {user?.firstName} {user?.lastName}
                              </p>
                              <p>@{user?.username}</p>
                            </div>
                            {user?.comment}
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div></>}
    </>
  );
};
