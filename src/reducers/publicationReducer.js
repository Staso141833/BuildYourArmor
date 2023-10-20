export const publicationReducer = (state, action) => {
  switch (action.type) {
    case "PUBLICATION_FETCH":
      return { ...action.payload };
    case "COMMENT_ADD":
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            ...action.payload,
            author: {
              email: action.userEmail,
            },
          },
        ],
      };
    case "COMMENT_LIKES_UPDATE":
      return {
        ...state,
        comments: [
          ...state.comments.map((currentComment) =>
            currentComment._id === action.commentId
              ? { ...currentComment, likes: [action.payload] }
              : { ...currentComment }
          ),
        ],
      };

    case "COMMENT_EDIT":
      return {
        ...state,
        comments: [
          ...state.comments.map((currentComment) =>
            currentComment._id === action.commentId
              ? { ...currentComment, comment: action.payload }
              : { ...currentComment }
          ),
        ],
      };

    case "COMMENT_DELETE":
      return {
        ...state,
        comments: [
          ...state.comments.filter(
            (currentComment) => currentComment._id !== action.commentId
          ),
        ],
      };
    default:
      return state;
  }
};
