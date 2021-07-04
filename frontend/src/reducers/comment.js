const initialState = {
    comments: [],
};


const comments = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_COMMENT":
        return { comments: [...payload] };
  
      default:
        return state;
    }
  };
  export default comments;
  
  export const setComments = (comments) => {
    return {
      type: "SET_COMMENT",
      payload: comments,
    };
  };