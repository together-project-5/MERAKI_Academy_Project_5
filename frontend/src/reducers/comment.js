const initialState = {
    comments: [],
};


const comments = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_ARCHIVE":
        return { comments: [...payload] };
  
      default:
        return state;
    }
  };
  export default comments;
  
  export const setArchive = (comments) => {
    return {
      type: "SET_ARCHIVE",
      payload: comments,
    };
  };