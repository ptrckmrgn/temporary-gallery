import React from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';

const NavigationDrawer = (props) => {


    return (
        <div id="navigation-drawer" className={props.isActive ? "active" : ""}>
            <div id="nav-wrapper">
                <h1>IAGO</h1>

                <div className="divider"></div>

                <nav role="navigation" aria-label="main navigation">
                    <div className={`nav-item ${props.isActive ? (props.activePage == 'gallery' ? 'active' : '') : ''}`}>
                        <Link to="/gallery" onClick={props.isNavShown}>Gallery</Link>
                    </div>
                    <div className={`nav-item ${props.isActive ? (props.activePage == 'purchase' ? 'active' : 'show') : ''}`}>
                        <Link to="/purchase">Purchase</Link>
                    </div>
                    <div className={`nav-item ${props.isActive ? (props.activePage == 'about' ? 'active' : 'show') : ''}`}>
                        <Link to="/about">About</Link>
                    </div>
                </nav>

                <div className="divider"></div>

                <Link to="/gallery" onClick={props.isNavShown}>
                    <Card
                        data={props.data}
                    />
                </Link>
            </div>
        </div>
    );
}

export default NavigationDrawer;
