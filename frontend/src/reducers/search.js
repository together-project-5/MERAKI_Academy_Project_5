const initialState = {
   search: "",
};

const searchTitle = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'SET_TITLE':
            return { search: payload };

        default:
            return state;
    }
};

export default searchTitle ;

export const setSearchTitle = (title) => {
    return {
        type: 'SET_TITLE',
        payload: title,
    };
};