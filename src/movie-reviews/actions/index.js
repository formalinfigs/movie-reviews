import * as controllers from '../controllers';
import { REVIEWS_KEY } from '../constants';
import * as types from '../constants/types';
import * as storage from '../../shared/tools/storage';

import Review from '../models/review';

const getReviews = async () => {
    let reviews = storage.getItem(REVIEWS_KEY);

    if (!reviews) {
        const { data } = await controllers.fetchReviews();
        reviews = data.items.map((review, index) => Review.parse({ ...review, id: index }));
        storage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
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
        console.log(err);
        dispatch({ type: types.FETCH_REVIEWS_FAILURE });
    }
};

export const editReview = (review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: types.EDIT_REVIEW,
            review: Review.parse(review),
        });

        const reviews = getState().movieReviews.data;
        storage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
    } catch (err) {
        console.log(err);
    }
};
