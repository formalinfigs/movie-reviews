import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BeatLoader from 'react-spinners/BeatLoader';

import './loader.scss';

class LoaderWrapper extends PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    render() {
        if (this.props.isLoading) {
            return (
                <div className="loader">
                    <BeatLoader sizeUnit="px" size={20} color="#0069d9" loading />
                </div>
            );
        }
        return <> {this.props.children}</>;
    }
}

export default LoaderWrapper;
