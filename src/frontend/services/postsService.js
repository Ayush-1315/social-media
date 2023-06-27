import axios from "axios";

export const getUserPosts = async (username) => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    return response;
  } catch (e) {
    return e;
  }
};
export const getAllPosts = async () => {
  try {
    const response = await axios.get("/api/posts");
    return response;
  } catch (e) {
    return e;
  }
};
export const createPostService = async (postData, token) => {
  try {
    const response = await axios.post(
      "/api/posts",
      { postData },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};
export const getPostService = async (postId) => {
  try {
    const response = axios.get(`/api/posts/${postId}`);
    return response;
  } catch (e) {
    return e;
  }
};

export const deletePostService = async (postId, token) => {
  try {
    const response = await axios.get(
      `/api/posts/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(response);
    return response;
  } catch (e) {
    return e;
  }
};
export const editPostService = async (postId, postData, token) => {
  console.log(postData);
  try {
    const response = await axios.post(
      `/api/posts/edit/${postId}`,
      {
        postData,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const likePostService = async (postId, token) => {
  try {
    const response = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (e) {
    return e;
  }
};

export const dislikePostService = async (postId, token) => {
  try {
    const response = await axios.get(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return response;
  } catch (e) {
    return e;
  }
};
