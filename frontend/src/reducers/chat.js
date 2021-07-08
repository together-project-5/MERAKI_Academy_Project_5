const initialState = {
    receiverId: 0,
};

const chat = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_ID':
            return { receiverId: payload };

        default:
            return state;
    }

}
export default chat

export const setId = (id) => {
    return {
        type: 'SET_ID',
        payload: id,
    };
};