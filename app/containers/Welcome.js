import React from 'react';

import Loader from '../components/Loader';

const About = () => {
    return (
        <div id="welcome" className="page">
            <div>
                <h1>IAGO</h1>
                <Loader color="#ddd" />
            </div>
        </div>
    );
}

export default About;
