import React, { Component } from 'react';

import AboutContent from '../components/AboutContent';
import NavigationToggle from '../components/NavigationToggle';
import NavigationDrawer from '../components/NavigationDrawer';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavActive: true
        };

        this.onClickToggle = this.onClickToggle.bind(this);
    }

    componentDidMount() {
        const MOBILE_WIDTH = 600;
        if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < MOBILE_WIDTH
                || !this.props.isNavActive) {
            this.setState({isNavActive: false});
            const parent = document.querySelector('#navigation').parentElement;
            parent.classList.remove('nav-active');
        }
    }

    onClickToggle() {
        this.setState({isNavActive: !this.state.isNavActive});

        const parent = document.querySelector('#navigation').parentElement;
        parent.classList.toggle('nav-active');
    }

    render() {
        return (
            <div id="navigation">
                <NavigationToggle
                    isNavActive={this.state.isNavActive}
                    onClickToggle={this.onClickToggle}
                />
                <NavigationDrawer
                    isNavActive={this.state.isNavActive}
                    activePage={this.props.activePage}
                    pieceData={this.props.pieceData}
                />
            </div>
        );
    }
}

export default Navigation;