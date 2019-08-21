import * as types from '../constants/types';

const initialState = {
    isLoading: false,
    data: []
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_REVIEWS_REQUEST: {
        return {
            ...state,
            isLoading: true,
        }
    }
    case types.FETCH_REVIEWS_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            data: [...action.reviews]
        }
    }
    case types.FETCH_REVIEWS_FAILURE: {
        return {
            ...state,
            isLoading: false,
            data: []
        }
    }
    default:
        return state;
    }
};

export default reviewReducer;