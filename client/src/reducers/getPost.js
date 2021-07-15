const initialState = {
    getPost: [],
};

const getPost = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_POST':
            return { getPost: [...payload] };

            default:
            return state;
    }
};

export default getPost;

export const setPost = (getPost) => {
    return {
        type: 'SET_POST',
        payload: getPost,
    };
};
