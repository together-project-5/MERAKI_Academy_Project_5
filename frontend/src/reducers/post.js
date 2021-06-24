const initialState = {
    posts: [],
};

const posts = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'SET_POST':
            return { posts: [...payload] };

        case 'CREATE_POST':
            return { posts: [...state.posts, payload] };

        case 'UPDATE_POST':

        case 'DELETE_POST':

        default:
            return state;
    }
};

export default posts;

export const setPost = (posts) => {
    return {
        type: 'SET_POST',
        payload: posts,
    };
};

export const createPost = (post) => {
    return {
        type: 'CREATE_POST',
        payload: post,
    };
};