import React, { Component } from 'react';

import AboutContent from '../components/AboutContent';
import Navigation from './Navigation';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavActive: true,
        };

        this.onClickToggleNav = this.onClickToggleNav.bind(this);
        // this.onClickCloseNav = this.onClickCloseNav.bind(this);
    }

    onClickToggleNav() {
        this.setState({isNavActive: !this.state.isNavActive});
    }

    // onClickCloseNav() {
    //     this.setState({isNavActive: false});
    // }

    render() {
        return (
            <div id="about">
                <Navigation
                    isActive={this.state.isNavActive}
                    activePage={'about'}
                    onClickToggle={this.onClickToggleNav}
                    data={this.props.data}
                />
                <div className={`page ${this.state.isNavActive ? 'active' : ''}`}>
                    <AboutContent />
                </div>
            </div>
        );
    }
}

export default About;