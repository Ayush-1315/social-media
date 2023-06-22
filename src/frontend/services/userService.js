import axios from "axios";

export const updateUserService = async (userCred, encodedToken) => {
  console.log(userCred, encodedToken);
  try {
    const response = await axios.post(
      "/api/users/edit",
      { ...userCred },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
export const getUser = async (username) => {
  try {
    const response = axios.get(`/api/users/${username}`);
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
      { headers: {authorization:token} }
    );
    return response
  } catch (e) {
    return e;
  }
};
