import React from 'react';

import Loader from '../Loader';

const GalleryIntro = (props) => {
    return (
        <div id="gallery-intro" className={`page ${props.introHidden ? 'hide' : 'show'}`}>
            <div className="container">
                <h1>IAGO</h1>
                <h4>We are open.</h4>
                <p>We recommend you remove yourself from any distractions, <br/>
                be comfortable, be open, and be present.</p>
                {props.pieceLoaded ? (
                    <button onClick={props.isIntroHidden} className="btn primary-btn">Enter Gallery</button>
                ) : (
                    <button onClick={props.isIntroHidden} className="btn primary-btn"><Loader /></button>
                )}
            </div>
        </div>
    );
}

export default GalleryIntro;
