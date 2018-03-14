import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Open extends Component {
    render() {
        return (
            <div id="open" className="page-wrapper">
                <section>
                    <div className="container">
                        <h1>IAGO</h1>
                        <h3>We are open.</h3>
                        <p>We recommend you remove yourself from any distractions, <br/>
                        be comfortable, be open, and be present.</p>
                        <Link to="/gallery" className="btn primary-btn">Enter Gallery</Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default Open;