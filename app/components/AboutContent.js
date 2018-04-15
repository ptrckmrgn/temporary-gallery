import React from 'react';

const style = {
    maxWidth: '500px',
    minHeight: '500px',
    padding: '0 16px'
}

const AboutContent = (props) => {
    return (
        <div style={style}>
            <h4>We are IAGO.</h4>
            <p>
                We are an online, mono-piece gallery with opening hours. Why? Because…
            </p>
            <h4 style={{marginTop: '32px'}}>We are for the art.</h4>
            <p>
                We want you to experience the artwork in the moment. We want you to connect with the piece and through it connect with the artist who created it.
            </p>
            <p>
                That is why we are only open for short periods of time. That is why we only show one piece at a time.
            </p>
            <h4 style={{marginTop: '32px'}}>We are for the artist.</h4>
            <p>
                Every piece we show is for sale. The price includes shipping. The artist gets 100% of the profits.
            </p>
            <p>
                Submit an enquiry to ask any questions or express your interest.
            </p>
        </div>
    );
}

export default AboutContent;
