import React from 'react';
import {PulseLoader} from 'react-spinners';

const Loader = () => {
    return (
        <div className='has-text-centered'>
            <PulseLoader size={12} margin='12px' color='#333' loading={true} />
        </div>
    );
}

export default Loader;
