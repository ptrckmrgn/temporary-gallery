import React, { Component } from 'react';

import Loader from '../components/Loader';
import Open from './Open';
import Closed from './Closed';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        if (true) {//this.props.isOpen) {
            return (
                <Open Firebase={this.props.Firebase} />
            );
        }
        else {
            return (
                <Closed />
            );
        }
    }
}

export default Gallery;