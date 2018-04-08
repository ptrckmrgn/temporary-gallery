import React, { Component } from 'react';
import Slideout from 'slideout';

import AboutContent from '../components/AboutContent';
import NavigationToggle from '../components/NavigationToggle';
import NavigationDrawer from '../components/NavigationDrawer';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavActive: true
        };

        this.onClickToggleNav = this.onClickToggleNav.bind(this);
    }

    onClickToggleNav() {
        this.setState({isNavActive: !this.state.isNavActive});
    }

    render() {
        return (
            <div id="navigation">
                <NavigationToggle
                    onClickToggle={this.props.onClickToggle}
                />
                <NavigationDrawer
                    isActive={this.props.isActive}
                    activePage={this.props.activePage}
                    data={this.props.data}
                />
            </div>
        );
    }
}

export default Navigation;