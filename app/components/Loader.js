import React from 'react';
import {PulseLoader} from 'react-spinners';

const Loader = (props) => {
    const style = {
        textAlign: props.center ? 'center' : 'left',
        opacity: 0.1
    }

    return (
        <div style={style}>
            <PulseLoader size={10} margin='6px' loading={true} />
        </div>
    );
}

export default Loader;
