import React, { Component } from 'react';

import Navigation from '../components/Navigation';

class Purchase extends Component {
    render() {
        return (
            <div id="purchase" className="page-wrapper has-navigation">
                <section>
                    <div className="container">
                        <h3 style={{marginBottom: '16px'}}>${this.props.data.price}.00</h3>
                        <h4>{this.props.data.artist}</h4>
                        <h5 style={{marginBottom: '8px'}}>{this.props.data.piece}</h5>
                        <h6>{this.props.data.medium}</h6>
                        <h6 style={{marginBottom: '24px'}}>{this.props.data.dimensions}</h6>

                        <p style={{marginBottom: '32px'}}>Have a question, or interested in buying this piece? Send us a message.</p>

                        <label>Your email</label>
                        <input />
                        <label>Message</label>
                        <textarea rows="6"></textarea>

                        <button className="btn primary-btn">Send Enquiry</button>

                        {/* <div className="container-left">
                            <img src={this.props.dataURI} />
                        </div>
                        <div className="container-right">

                        </div> */}
                    </div>
                </section>
                <Navigation
                    navShown='true'
                    active='purchase'
                />
            </div>
        );
    }
}

export default Purchase;