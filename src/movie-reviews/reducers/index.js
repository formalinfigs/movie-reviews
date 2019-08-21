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
        case types.SORT_REVIEWS_UP_BY_RATING: {
            const reviews = [...state.data];

            return {
                ...state,
                data: reviews.sort((a, b) => a.rating - b.rating),
            };
        }
        case types.SORT_REVIEWS_DOWN_BY_RATING: {
            const reviews = [...state.data];

            return {
                ...state,
                data: reviews.sort((a, b) => b.rating - a.rating),
            };
        }
        default:
            return state;
    }
};

export default reviewReducer;
