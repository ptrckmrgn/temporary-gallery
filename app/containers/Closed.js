import React, { Component } from 'react';

class Closed extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        // TODO: Implement opening hours
    }

    render() {
        return (
            <div id="closed" className="page-wrapper">
                <section>
                    <div className="container">
                        <h1>IAGO</h1>
                        <h3>Sorry this website is closed.</h3>
                        <p>We will be open again on <span id="hours">Saturday, 10 March 2018 at 6:30 PM (AEDT)</span></p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Closed;