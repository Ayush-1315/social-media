import axios from "axios";

export const updateUserService = async (userData, encodedToken) => {
  try {
    const response = await axios.post(
      "/api/users/edit",
      { userData },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    return response;
  } catch (e) {
    return e;
  }
};

export const getUser = async (userId) => {
  try {
    const response = axios.get(`/api/users/${userId}`);
    return response;
  } catch (e) {
    return e;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get("/api/users");
    return response;
  } catch (e) {
    return e;
  }
};

export const followUserService = async (userId, token) => {
  try {
    const response = await axios.post(
      `/api/users/follow/${userId}`,
      {},
      { headers: { authorization: token } }
    );
    return response;
  } catch (e) {
    return e;
  }
};

export const unfollowUserService = async (userId, token) => {
  try {
    const response = await axios.post(
      `/api/users/unfollow/${userId}`,
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
