import React from 'react';
import {PulseLoader} from 'react-spinners';

const Loader = (props) => {
    return (
        <div className='react-spinner'>
            <PulseLoader size={10} margin='6px' loading={true} />
        </div>
    );
}

export default Loader;
