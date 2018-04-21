import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader';
import SecureImage from '../components/SecureImage';
import Navigation from './Navigation';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            introHidden: false,
        };

        this.isIntroHidden = this.isIntroHidden.bind(this);
        this.isPieceLoaded = this.isPieceLoaded.bind(this);
    }

    isIntroHidden() {
        this.setState({introHidden: true});
    }

    isPieceLoaded() {
        this.setState({pieceLoaded: true});
    }

    componentDidMount() {
        document.querySelector('#overlay').classList.remove('first-load');
        this.props.setFirstLoad(false);
    }

    render() {
        if (this.props.pieceData) {
            return (
                <div id="gallery" className="nav-active">
                    <div id="overlay" className={this.props.isFirstLoad ? 'first-load' : ''}></div>
                    <Navigation
                        isNavActive={false}
                        activePage={'gallery'}
                        pieceData={this.props.pieceData}
                    />
                    <div className="page">
                        <Link id="piece" to="/purchase">
                            {/* <div id="piece"> */}
                                <SecureImage url={this.props.pieceURI} />
                            {/* </div> */}
                        </Link>
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