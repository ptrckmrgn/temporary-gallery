import React, { Component } from 'react';

import AboutText from '../components/AboutText';
import Navigation from '../components/Navigation';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div id="about" className="page-wrapper has-navigation">
                <section>
                    <AboutText />
                </section>
                <Navigation
                    navShown='true'
                    active='about'
                />
            </div>
        );
    }
}

export default About;