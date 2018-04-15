import React from 'react';

import Loader from '../components/Loader';

const Welcome = () => {
    const style = {
        minHeight: '300px'
    }

    return (
        <div id="welcome" className="page">
            <div style={style}>
                <h1 style={{opacity: '0.2'}}>IAGO</h1>
                <Loader center={true} />
            </div>
        </div>
    );
}

export default Welcome;
