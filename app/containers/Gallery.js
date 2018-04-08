import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import Loader from '../components/Loader';
import SecureImage from '../components/SecureImage';
import Navigation from './Navigation';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            introHidden: false,
            isNavActive: false
        };

        this.isIntroHidden = this.isIntroHidden.bind(this);
        this.isPieceLoaded = this.isPieceLoaded.bind(this);
        this.onClickToggleNav = this.onClickToggleNav.bind(this);
    }

    isIntroHidden() {
        this.setState({introHidden: true});
    }

    isPieceLoaded() {
        this.setState({pieceLoaded: true});
    }

    onClickToggleNav() {
        this.setState({isNavActive: !this.state.isNavActive});
    }

    render() {
        if (this.props.data) {
            return (
                <div id="gallery">
                    <Navigation
                        isActive={this.state.isNavActive}
                        activePage={'gallery'}
                        onClickToggle={this.onClickToggleNav}
                        data={this.props.data}
                    />
                    <div className={`page ${this.state.isNavActive ? 'active' : ''}`}>
                        <div id="piece">
                            <SecureImage url={this.props.imgURI} />
                        </div>
                    {/* }<div id="gallery-piece" className="page has-navigation">
                        <section id="piece">
                            <div id="canvas-wrapper">
                                <div id="left-wire" className="wire"></div>
                                <div id="right-wire" className="wire"></div>
                                <SecureImage url={this.props.imgURI} />
                            </div>
                            <Link to="/purchase">
                                <Card
                                    data={this.props.data}
                                />
                            </Link>
                        </section>
                        <Navigation
                            navShown={this.state.navShown}
                            isNavShown={this.isNavShown}
                            active="home"
                        />
                    </div> */}
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default Gallery;