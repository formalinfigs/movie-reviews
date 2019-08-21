import * as controllers from '../controllers';
import * as constants from '../constants';
import * as types from '../constants/types';
import * as storage from '../../shared/tools/storage';

import Review from '../models/review';

const getReviews = async () => {
    let reviews = storage.getItem(constants.REVIEWS_KEY);

    if (!reviews) {
        const { data } = await controllers.fetchReviews();

        reviews = data.items.map((review, index) => Review.parse({ ...review, id: index }));

        storage.setItem(constants.REVIEWS_KEY, JSON.stringify(reviews));
    } else {
        reviews = JSON.parse(reviews);
    }

    return reviews;
};

export const fetchReviews = () => async (dispatch) => {
    try {
        dispatch({ type: types.FETCH_REVIEWS_REQUEST });

        const reviews = await getReviews();

        dispatch({
            type: types.FETCH_REVIEWS_SUCCESS,
            reviews: reviews.map((review) => Review.parse(review)),
        });
    } catch (err) {
        dispatch({ type: types.FETCH_REVIEWS_FAILURE });
    }
};

export const editReview = (review) => async (dispatch, getState) => {
    dispatch({
        type: types.EDIT_REVIEW,
        review: Review.parse(review),
    });

    const { reviews } = getState();
    storage.setItem(constants.REVIEWS_KEY, JSON.stringify(reviews));
};

export const sortByRating = (desc) => async (dispatch, getState) => {
    let reviews;
    if (desc === constants.SORT_UP_DESC) {
        reviews = [...getState().reviews].sort((a, b) => a.rating - b.rating);
    }
    if (desc === constants.SORT_DOWN_DESC) {
        reviews = [...getState().reviews].sort((a, b) => b.rating - a.rating);
    }

    dispatch({
        type: types.UPDATE_REVIEWS,
        reviews,
    });

    storage.setItem(constants.REVIEWS_KEY, JSON.stringify(reviews));
};
