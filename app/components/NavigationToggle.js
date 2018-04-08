import React from 'react';
import { Link } from 'react-router-dom';

const NavigationToggle = (props) => {
    return (
        <div
            id="navigation-toggle"
            onClick={props.onClickToggle}
        >
            Toggle
        </div>
    );
}

export default NavigationToggle;
