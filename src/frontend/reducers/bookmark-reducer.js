export const initialBookmarks = {
  isBookmarksLoading: false,
  bookmarks: [],
};
export const bookmarksReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING_BOOKMARKS":
      return { ...state, isBookmarksLoading: payload };
    case "UPDATE_BOOKMARKS":
      return { ...state, bookmarks: [...payload] };
    default:
      return state;
  }
};
