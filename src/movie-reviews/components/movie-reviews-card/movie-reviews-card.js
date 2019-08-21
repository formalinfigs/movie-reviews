import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Review from '../../models/review';

import './movie-reviews-card.scss';

class MovieReviewsCard extends PureComponent {
    static propTypes = {
        editReview: PropTypes.func.isRequired,
        review: PropTypes.instanceOf(Review),
    };

    state = {
        isEditing: false,
        content: this.props.review.content,
    };

    handleContentChange = (e) => this.setState({ content: e.target.value });

    handleButtonEdit = () => {
        this.setState({ isEditing: true });
    };

    handleButtonCancel = () => {
        this.setState({ isEditing: false, content: this.props.review.content });
    };

    handleButtonSave = () => {
        this.setState({ isEditing: false });
        this.props.editReview({ ...this.props.review, content: this.state.content });
    };

    render() {
        const { review } = this.props;
        const { isEditing, content } = this.state;

        return (
            <div className="movie-review-card">
                <span className="movie-review-card__title">{review.title}</span>
                {isEditing ? (
                    <>
                        <textarea
                            className="movie-review-card__textarea"
                            value={content}
                            onChange={this.handleContentChange}
                        />
                        <span className="movie-review-card__rating">Rating: {review.rating}</span>
                        <button className="movie-review-card__button" onClick={this.handleButtonCancel}>
                            Cancel
                        </button>
                        <button className="movie-review-card__button" onClick={this.handleButtonSave}>
                            Save
                        </button>
                    </>
                ) : (
                    <>
                        <span className="movie-review-card__content">{review.content}</span>
                        <span className="movie-review-card__rating">Rating: {review.rating}</span>
                        <button className="movie-review-card__button" onClick={this.handleButtonEdit}>
                            Edit
                        </button>
                    </>
                )}
            </div>
        );
    }
}

export default MovieReviewsCard;
