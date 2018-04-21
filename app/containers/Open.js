import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Open extends Component {
    render() {
        const style = {
            minHeight: '300px',
            textAlign: 'center',
            padding: '0 16px'
        }

        return (
            <div id="open" className="page">
                <div style={style}>
                    <h1>IAGO</h1>
                    <h3>We are open.</h3>
                    <p>We recommend you remove yourself from distractions.<br/>
                    Be comfortable, open, and present.</p>
                    <Link to="/gallery" className="btn primary-btn">Enter Gallery</Link>
                </div>
            </div>
        );
    }
}

export default Open;