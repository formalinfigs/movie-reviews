import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './movie-reviews/reducers';
import MovieReviews from './movie-reviews/containers/movie-reviews-container';

import './index.scss';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <MovieReviews />
    </Provider>,
    document.getElementById('root'),
);
