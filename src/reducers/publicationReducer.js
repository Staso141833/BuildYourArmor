export const publicationReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "PUBLICATION_FETCH":
      return { ...action.payload };
      case "COMMENT_ADD":
        // console.log(action.payload)
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
  // ...state, comments: [...state.comments,{...action.payload, author: {email: action.userEmail,},},],};