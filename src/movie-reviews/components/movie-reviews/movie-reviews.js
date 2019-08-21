import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LoaderWrapper from '../../../shared/component/loader/loader';
import MovieReviewsCard from '../movie-reviews-card/movie-reviews-card';

import Review from '../../models/review';

class MovieReviews extends PureComponent {
    static propTypes = {
        fetchReviews: PropTypes.func.isRequired,
        editReview: PropTypes.func.isRequired,

        reviews: PropTypes.arrayOf(PropTypes.instanceOf(Review)),
        isLoading: PropTypes.bool.isRequired,
    };

    componentDidMount = () => {
        this.props.fetchReviews();
    };

    renderReviews = (reviews) =>
        reviews.map((review) => (
            <MovieReviewsCard review={review} key={review.id} editReview={this.props.editReview} />
        ));

    render() {
        const { reviews, isLoading } = this.props;

        return (
            <div className="movie-reviews">
                <div>Reviews</div>
                <LoaderWrapper isLoading={isLoading}>
                    {reviews.length > 0 ? this.renderReviews(reviews) : <div>No reviews :(</div>}
                </LoaderWrapper>
            </div>
        );
    }
}

export default MovieReviews;
