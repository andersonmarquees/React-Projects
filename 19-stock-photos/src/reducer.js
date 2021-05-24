const reducer = (state, action) => {
  if (action.type === "QUERY_EVENT") {
    return { ...state, query: action.query };
  }
  if (action.type === "RESET_PAGE") {
    return { ...state, page: 1 };
  }
  if (action.type === "CHANGE_PAGE") {
    return { ...state, page: state.page + 1 };
  }
  if (action.type === "HANDLE_SUBMIT") {
    return { ...state };
  }
  if (action.type === "DISPLAY_QUERY") {
    return { ...state, photos: action.payload };
  }
  if (action.type === "DISPLAY_PHOTOS") {
    return {
      ...state,
      photos: [...state.photos, ...action.payload],
      loading: false,
    };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "ERROR") {
    return { ...state, loading: false };
  }
};

export default reducer;
