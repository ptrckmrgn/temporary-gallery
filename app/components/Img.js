import React from 'react';

import Loader from '../components/Loader';

const Img = props => {
    if (!props.src) {
        return (
            <Loader />
        );
    }
    else {
        const style = {
            backgroundImage: `url(${props.src})`
        };
        return (
            <div id={props.id} style={style}></div>
        );
    }
}

export default Img;
