import { connect } from 'react-redux';

import MovieReviews from '../components/movie-reviews/movie-reviews';

import * as actions from '../actions';
import * as constants from '../constants';

export default connect(
    (state) => ({
        reviews: state.reviews,
        isLoading: state.isLoading,
    }),
    (dispatch) => ({
        fetchReviews: () => dispatch(actions.fetchReviews()),
        editReview: (review) => dispatch(actions.editReview(review)),
        sortUpByRating: () => dispatch(actions.sortByRating(constants.SORT_UP_DESC)),
        sortDownByRating: () => dispatch(actions.sortByRating(constants.SORT_DOWN_DESC)),
    }),
)(MovieReviews);
