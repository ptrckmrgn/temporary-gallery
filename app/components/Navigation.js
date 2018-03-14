import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav id="navigation" role="navigation" aria-label="main navigation">
            <div className={`nav-brand ${props.navShown ? (props.active == 'home' ? 'active' : '') : ''}`}>
                <Link to="/gallery" onClick={props.isNavShown}>IAGO</Link>
            </div>
            <div className={`nav-item hide ${props.navShown ? (props.active == 'about' ? 'show active' : 'show') : ''}`}>
                <Link to="/about">About IAGO</Link>
            </div>
            <div className={`nav-item hide ${props.navShown ? (props.active == 'purchase' ? 'show active' : 'show') : ''}`}>
                <Link to="/purchase">Purchase Piece</Link>
            </div>
        </nav>
    );
}

export default Navigation;
