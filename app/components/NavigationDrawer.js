import React from 'react';
import { Link } from 'react-router-dom';

const NavigationDrawer = (props) => {
    return (
        <div id="navigation-drawer" className={props.isNavActive ? "active" : ""}>
            <div id="nav-wrapper">
                <h1>IAGO</h1>

                <div className="divider"></div>

                <nav role="navigation" aria-label="main navigation">
                    <div className={`nav-item ${props.isNavActive ? (props.activePage == 'gallery' ? 'active' : '') : ''}`}>
                        <Link to="/gallery" onClick={props.isNavShown}>Gallery</Link>
                    </div>
                    <div className={`nav-item ${props.isNavActive ? (props.activePage == 'purchase' ? 'active' : 'show') : ''}`}>
                        <Link to="/purchase">Purchase</Link>
                    </div>
                    <div className={`nav-item ${props.isNavActive ? (props.activePage == 'about' ? 'active' : 'show') : ''}`}>
                        <Link to="/about">About</Link>
                    </div>
                </nav>

                <div className="divider"></div>

                <Link to="/gallery" onClick={props.isNavShown}>
                    <div className="card">
                        <div className="card-artist">{props.pieceData.artist}</div>
                        <div>
                            <span className="card-title">{props.pieceData.title}</span>
                            <span className="card-year">({props.pieceData.year})</span>
                        </div>
                        <div className="card-price">${props.pieceData.price}</div>
                        <div className="card-medium">{props.pieceData.medium}</div>
                        <div className="card-dimensions">{props.pieceData.dimensions}</div>
                        <div className="card-description">{props.pieceData.description}</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NavigationDrawer;
