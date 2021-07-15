const initialState = {
    comment: [],
};


const comments = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_COMMENT":
        return { comment: [...payload] };
  
      default:
        return state;
    }
  };
  export default comments;
  
  export const setComments = (comment) => {
    return {
      type: "SET_COMMENT",
      payload: comment,
    };
  };