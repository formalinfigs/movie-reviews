import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Review from '../../models/review';

import './movie-review-card.scss';

class MovieReviewCard extends PureComponent {
    static propTypes = {
        review: PropTypes.instanceOf(Review),
    };

    render() {
        const { review } = this.props;

        return (
            <div className="movie-review-card">
                <span className="movie-review-card__title">{review.title}</span>
                <span className="movie-review-card__content">{review.content}</span>
                <span className="movie-review-card__rating">Rating: {review.rating}</span>
            </div>
        );
    }
}

export default MovieReviewCard;
