const initialState = {
    favorites: [],
};

const favorites = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_FAVORITE':
            return { favorites: [...payload] };

        case 'DELETE_FAVORITE':
            return {
                favorites: state.favorites.filter(
                    (favorite) => favorite._id !== payload._id,
                ),
            };

        default:
            return state;
    }

};
export default favorites;

export const setFavorite = (favorites) => {
    return {
        type: 'SET_FAVORITE',
        payload: favorites,
    };
};

export const deleteFavorite = (favorite) => {
    return {
        type: 'DELETE_FAVORITE',
        payload: favorite,
    };
}