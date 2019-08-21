import { connect } from 'react-redux';

import MovieReviews from '../components/movie-reviews/movie-reviews';

import * as actions from '../actions';

export default connect(
    (state) => ({
        reviews: state.movieReviews.data,
        isLoading: state.movieReviews.isLoading,
    }),
    (dispatch) => ({
        fetchReviews: () => dispatch(actions.fetchReviews()),
        editReview: (review) => dispatch(actions.editReview(review)),
    }),
)(MovieReviews);
