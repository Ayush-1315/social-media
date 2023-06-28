export const initialPostState = {
  postLoading: false,
  posts: [],
  userPosts: [],
  sortBy: "",
};
export const postReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "POST_LOADING":
      return { ...state, postLoading: payload };
    case "USER_POST":
        return {...state,userPosts:[...payload]};
    case "SET_POSTS":
        return {...state,posts:[...payload]};
    case "SORT_BY":
        return {...state,sortBy:payload}
    default:
      return state;
  }
};
