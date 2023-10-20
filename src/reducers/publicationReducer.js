export const publicationReducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "PUBLICATION_FETCH":
      return { ...action.payload };
    case "COMMENT_ADD":   
     console.log(action.payload);
    console.log(action.commentId)
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
      console.log(action.payload);
      console.log(action.commentId)
      return { ...state, comments: [...state.comments.map((currentComment) => currentComment._id === action.commentId ? {...currentComment, likes: [action.payload]} : {...currentComment})] };
    //   return { ...state, comments: [state.comments.map((currentComment) => currentComment._id === action.commentId ? {...currentComment, likes: [currentComment.likes.push(action.payload)]} : currentComment)] };
      default:
      return state;
  }
};
// ...state, comments: [...state.comments,{...action.payload, author: {email: action.userEmail,},},],};
