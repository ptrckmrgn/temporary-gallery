import React, { Component } from 'react';

import Navigation from '../components/Navigation';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div id="about" className="page-wrapper has-navigation">
                <section>
                    <div id="about-text">
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
                </section>
                <Navigation
                    navShown='true'
                    active='about'
                />
            </div>
        );
    }
}

export default About;