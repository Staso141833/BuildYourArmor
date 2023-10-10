export const publicationReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "PUBLICATION_FETCH":
      console.log(action.payload);
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
    default:
      return state;
  }
};
