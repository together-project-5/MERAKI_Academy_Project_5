const initialState = {
    reportingPost: [],
};

const reportingPost = (state = initialState, { type, payload }) => {

    switch (type) {
        case 'SET_REPORT_POST':
            return { reportingPost: [...payload] };

        case 'DELETE_REPORT_POST':
            return {
                reportingPost: state.reportingPost.filter(
                    (post) => post._id !== payload._id,
                ),
            };

        default:
            return state;
    }
};

export default reportingPost;

export const setReportingPost = (posts) => {
    return {
        type: 'SET_REPORT_POST',
        payload: posts,
    };
};

export const deleteReportingPost = (post) => {
    return {
        type: 'DELETE_REPORT_POST',
        payload: post,
    };
};