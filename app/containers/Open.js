import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Open extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.makeFullscreen = this.makeFullscreen.bind(this);
    }

    makeFullscreen() {
        this.viewGallery();
    }

    viewGallery() {
        this.setState({showIntro: false});
    }

    render() {
        return (
            <div id="gallery-intro" className="page">
                <div className="container">
                    <h1>IAGO</h1>
                    <h4>We are open.</h4>
                    <p>We recommend you remove yourself from any distractions, <br/>
                    be comfortable, be open, and be present.</p>
                    <Link to="/gallery/1" className="btn primary-btn">View Fullscreen</Link><br />
                    <Link to="/gallery" className="btn">Don't View Fullscreen</Link>
                </div>
            </div>
        );
    }
}

export default Open;