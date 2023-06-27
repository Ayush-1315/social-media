import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { getPostService } from "../../services/postsService";
import { useAuth } from "../../context/authContext";
import postPageCSS from "./postPage.module.css";
import { Modal } from "../../components/Modal/modal";

export const PostPage = () => {
  console.log(postPageCSS)
  const { pId } = useParams();
  const {isLogin}=useAuth();
  const navigate=useNavigate();
  const [currentPost, setCurrentPost] = useState(null);
  useEffect(() => {
    if(isLogin){
        // navigate(`/posts/${pId}`);
        (async () => {
            try {
              const response = await getPostService(pId);
              if (response?.status === 200) {
                setCurrentPost(response?.data?.post);
              }
              else throw response
            } catch (e) {
              console.log(e);
            }
          })();
    }
  }, [pId,isLogin,navigate]);
  console.log(currentPost);
  return <>Post Here
  <Modal modalComponent={"ji"}/>
  
  </>;
};
