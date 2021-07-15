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
            return {
                posts: state.posts.map((post) => {
                    if (post._id === payload._id) {
                        return payload;
                    } else {
                        return post;
                    }
                }),
            };

        case 'DELETE_POST':
            return {
                posts: state.posts.filter(
                    (post) => post._id !== payload._id,
                ),
            };

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

export const updatePost = (post) => {
    return {
        type: 'UPDATE_POST',
        payload: post,
    };
};

export const deletePost = (post) => {
    return {
        type: 'DELETE_POST',
        payload: post,
    };
};