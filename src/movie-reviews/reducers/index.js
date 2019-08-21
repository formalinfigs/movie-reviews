import * as types from '../constants/types';

const initialState = {
    isLoading: false,
    data: [],
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_REVIEWS_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case types.FETCH_REVIEWS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: [...action.reviews],
            };
        }
        case types.FETCH_REVIEWS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                data: [],
            };
        }
        case types.EDIT_REVIEW: {
            const { review } = action;
            const index = state.data.findIndex((item) => item.id === review.id);

            if (index === -1) {
                return { ...state };
            }

            const reviews = [...state.data];
            reviews[index] = review;

            return {
                ...state,
                data: reviews,
            };
        }
        default:
            return state;
    }
};

export default reviewReducer;
