import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Card, Form, Button } from 'react-bootstrap';

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

    handleButtonEdit = () => this.setState({ isEditing: true });

    handleButtonCancel = () => this.setState({ isEditing: false, content: this.props.review.content });

    handleButtonSave = () => {
        this.setState({ isEditing: false });
        if (this.props.review.content !== this.state.content) {
            this.props.editReview({ ...this.props.review, content: this.state.content });
        }
    };

    render() {
        const { review } = this.props;
        const { isEditing, content } = this.state;

        return (
            <Card className="movie-reviews-card">
                <Card.Header as="h5" className="movie-reviews-card__title">
                    {review.title}
                </Card.Header>
                {isEditing ? (
                    <Card.Body>
                        <Form.Control
                            as="textarea"
                            rows="4"
                            className="movie-reviews-card__textarea"
                            value={content}
                            onChange={this.handleContentChange}
                        />
                        <span className="movie-reviews-card__rating">Rating: {review.rating}</span>
                        <div className="movie-reviews-card__button-container">
                            <Button
                                variant="light"
                                className="movie-reviews-card__button-container-item"
                                onClick={this.handleButtonCancel}>
                                Cancel
                            </Button>
                            <Button
                                variant="primary"
                                className="movie-reviews-card__button-container-item"
                                onClick={this.handleButtonSave}>
                                Save
                            </Button>
                        </div>
                    </Card.Body>
                ) : (
                    <Card.Body>
                        <Card.Text className="movie-reviews-card__content">{review.content}</Card.Text>
                        <span className="movie-reviews-card__rating">Rating: {review.rating}</span>
                        <div className="movie-reviews-card__button-container">
                            <Button
                                variant="primary"
                                className="movie-reviews-card__button-container-item"
                                onClick={this.handleButtonEdit}>
                                Edit
                            </Button>
                        </div>
                    </Card.Body>
                )}
            </Card>
        );
    }
}

export default MovieReviewsCard;
