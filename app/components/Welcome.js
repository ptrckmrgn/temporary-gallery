import React from 'react';
import Logo from './Logo';
import Loader from './Loader';

const About = () => {
    return (
        <div id="welcome">
            <div>
                <h1><Logo /></h1>
                <Loader />
            </div>
        </div>
    );
}

export default About;
