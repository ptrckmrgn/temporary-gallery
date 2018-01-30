import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';

const Navigation = () => {
    const style = {
        fontSize: '30px'
    };

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            {/* <div className="navbar-brand">
                Emotional UT
            </div> */}
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item"><Logo height='30px' /></Link>
                </div>

                <div className="navbar-end">
                    <Link to="/about" className="navbar-item">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
