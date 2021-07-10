const initialState = {
    messages: [],
};

const messages = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'SET_MESSAGE':
            return { messages: [...payload] };

        case 'CREATE_MESSAGE':
            return { messages: [...state.messages, payload] };

        default:
            return state;
    }
};

export default messages;

export const setMessage = (messages) => {
    return {
        type: 'SET_MESSAGE',
        payload: messages,
    };
};

export const createMessage = (message) => {
    return {
        type: 'CREATE_MESSAGE',
        payload: message,
    };
};