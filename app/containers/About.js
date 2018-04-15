import React, { Component } from 'react';

import AboutContent from '../components/AboutContent';
import Navigation from './Navigation';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // isNavActive: true,
        };

        // this.setNavActive = this.setNavActive.bind(this);
    }

    render() {
        return (
            <div id="about" className="nav-active">
                <Navigation
                    isNavActive={true}
                    activePage={'about'}
                    pieceData={this.props.pieceData}
                />
                <div className="page">
                    <AboutContent />
                </div>
            </div>
        );
    }
}

export default About;