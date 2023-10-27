export const publicationReducer = (state, action) => {
  switch (action.type) {
    case "PUBLICATION_FETCH":
      return { ...action.payload };

    case "PUBLICATION_LIKE_REMOVE":
      console.log(action.payload);
      return {
        ...state,
        likes: [
          ...state.likes.filter(
            (currentLike) => currentLike !== action.payload
          ),
        ],
      };

    case "PUBLICATION_LIKE_ADD":
      return {
        ...state,
        likes: [...state.likes.concat(action.payload)],
      };
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

    case "COMMENT_LIKES_REMOVE":
      return {
        ...state,
        comments: [
          ...state.comments.map((currentComment) =>
            currentComment._id === action.commentId
              ? {
                  ...currentComment,
                  likes: [
                    ...currentComment.likes.filter(
                      (currentLike) => currentLike !== action.payload
                    ),
                  ],
                }
              : { ...currentComment }
          ),
        ],
      };

    case "COMMENT_LIKES_ADD":
      return {
        ...state,
        comments: [
          ...state.comments.map((currentComment) =>
            currentComment._id === action.commentId
              ? {
                  ...currentComment,
                  likes: [...currentComment?.likes?.concat(action.payload)],
                }
              : { ...currentComment }
          ),
        ],
      };

    // case "COMMENT_LIKES_UPDATE":
    //   return {
    //     ...state,
    //     comments: [
    //       ...state.comments.map((currentComment) =>
    //         currentComment._id === action.commentId
    //           ? { ...currentComment, likes: [action.payload] }
    //           : { ...currentComment }
    //       ),
    //     ],
    //   };

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
