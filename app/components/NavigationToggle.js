import React from 'react';
import { Link } from 'react-router-dom';

const NavigationToggle = (props) => {
    return (
        <a id="navigation-toggle" onClick={props.onClickToggle}>
            <div id="hamburger" title="Menu" className={props.isNavActive && 'active'}>
                <span className="line line-1"></span>
                <span className="line line-2"></span>
                <span className="line line-3"></span>
            </div>
        </a>
    );
}

export default NavigationToggle;
