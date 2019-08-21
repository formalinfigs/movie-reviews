import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

import LoaderWrapper from '../../../shared/component/loader/loader';
import MovieReviewsCard from '../movie-reviews-card/movie-reviews-card';

import Review from '../../models/review';

import './movie-reviews.scss';

class MovieReviews extends PureComponent {
    static propTypes = {
        fetchReviews: PropTypes.func.isRequired,
        editReview: PropTypes.func.isRequired,

        sortUpByRating: PropTypes.func.isRequired,
        sortDownByRating: PropTypes.func.isRequired,

        reviews: PropTypes.arrayOf(PropTypes.instanceOf(Review)),
        isLoading: PropTypes.bool.isRequired,
    };

    componentDidMount = () => {
        this.props.fetchReviews();
    };

    renderReview = (review) => <MovieReviewsCard review={review} key={review.id} editReview={this.props.editReview} />;

    render() {
        const { reviews, isLoading, sortUpByRating, sortDownByRating } = this.props;

        return (
            <div className="movie-reviews">
                <LoaderWrapper isLoading={isLoading}>
                    {reviews.length > 0 ? (
                        <>
                            <div className="movie-reviews__buttons">
                                <span>Sort reviews by rating</span>
                                <Button variant="dark" className="movie-reviews__buttons-item" onClick={sortUpByRating}>
                                    Up
                                </Button>
                                <Button
                                    variant="dark"
                                    className="movie-reviews__buttons-item"
                                    onClick={sortDownByRating}>
                                    Down
                                </Button>
                            </div>
                            {reviews.map(this.renderReview)}
                        </>
                    ) : (
                        <span className="movie-reviews__message">No reviews :(</span>
                    )}
                </LoaderWrapper>
            </div>
        );
    }
}

export default MovieReviews;
