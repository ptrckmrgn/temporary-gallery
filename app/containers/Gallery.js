import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import Loader from '../components/Loader';
import SecureImage from '../components/SecureImage';
import Navigation from '../components/Navigation';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            introHidden: false,
            navShown: false
        };

        this.isIntroHidden = this.isIntroHidden.bind(this);
        this.isPieceLoaded = this.isPieceLoaded.bind(this);
        this.isNavShown = this.isNavShown.bind(this);
    }

    isIntroHidden() {
        this.setState({introHidden: true});
    }

    isPieceLoaded() {
        this.setState({pieceLoaded: true});
    }

    isNavShown() {
        this.setState({navShown: !this.state.navShown});
    }

    render() {
        if (this.props.data) {
            return (
                <div id="gallery" className="page">
                    <div id="gallery-piece" className="page has-navigation">
                        <section id="piece">
                            <div id="left-wire" className="wire"></div>
                            <div id="right-wire" className="wire"></div>
                            <div id="canvas-wrapper">
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