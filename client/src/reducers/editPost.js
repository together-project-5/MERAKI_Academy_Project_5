const initialState = {
    postId: 0,
};

const editPost = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'SET_POST_ID':
            return { postId: payload };

        default:
            return state;
    }
};

export default editPost;

export const setPostId = (id) => {
    return {
        type: 'SET_POST_ID',
        payload: id,
    };
};