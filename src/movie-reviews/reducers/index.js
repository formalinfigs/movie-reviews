import * as types from '../constants/types';

const initialState = {
    isLoading: false,
    reviews: [],
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
                reviews: [...action.reviews],
            };
        }
        case types.FETCH_REVIEWS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                reviews: [],
            };
        }
        case types.EDIT_REVIEW: {
            const { review } = action;
            const index = state.reviews.findIndex((item) => item.id === review.id);

            if (index === -1) {
                return { ...state };
            }

            const editedReviews = [...state.reviews];
            editedReviews[index] = review;

            return {
                ...state,
                reviews: editedReviews,
            };
        }
        case types.UPDATE_REVIEWS: {
            return {
                ...state,
                reviews: action.reviews,
            };
        }
        default:
            return state;
    }
};

export default reviewReducer;
