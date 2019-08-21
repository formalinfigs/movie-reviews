import * as controllers from '../controllers';
import * as types from '../constants/types';

import Review from '../models/review';

export const fetchReviews = () => async (dispatch) => {
    try {
        dispatch({ type: types.FETCH_REVIEWS_REQUEST });

        const { data } = await controllers.fetchReviews();

        dispatch({ type: types.FETCH_REVIEWS_SUCCESS, reviews: data.items.map((item) => Review.parse(item)) });
    } catch (err) {
        console.log('err');
        dispatch({ type: types.FETCH_REVIEWS_FAILURE });
    }
};
