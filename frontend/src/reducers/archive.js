const initialState = {
  archives: [],
};

const archives = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ARCHIVE":
      return { archives: [...payload] };

    default:
      return state;
  }
};
export default archives;

export const setArchive = (archives) => {
  return {
    type: "SET_ARCHIVE",
    payload: archives,
  };
};
