import React, { Component } from 'react';

import SecureImage from '../components/SecureImage';
import Navigation from '../components/Navigation';

class Purchase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    onChangeName(name) {
        this.setState({name})
    }

    onChangeEmail(email) {
        this.setState({email})
    }

    onChangeMessage(message) {
        this.setState({message})
    }

    sendMessage() {
        // TODO: validation & loading state
        this.props.Firebase.firestore().collection('messages').add({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }).then(() => {
            // TODO: success
        }).catch(() => {
            // TODO: error
        });
    }

    render() {

        return (
            <div id="purchase" className="page-wrapper has-navigation">
                <section>
                    <div className="container content">
                        <div className="row">
                            <div className="one-half column">
                                <div className="canvas-wrapper">
                                    {/* <div className="canvas"> */}
                                        <SecureImage
                                            url={this.props.imgURI}
                                        />
                                        {/* <div id="secure-image" style={secureImageStyle}></div> */}
                                    {/* </div> */}
                                </div>
                            </div>
                            <div className="one-half column">
                                <h3 style={{marginBottom: '16px'}}>${this.props.data.price}.00</h3>
                                <h4>{this.props.data.artist}</h4>
                                <h5 style={{marginBottom: '8px'}}>{this.props.data.piece}</h5>
                                <h6>{this.props.data.medium}</h6>
                                <h6 style={{marginBottom: '24px'}}>{this.props.data.dimensions}</h6>

                                <p style={{marginBottom: '32px'}}>Have a question, or interested in buying this piece? Send us a message.</p>

                                <label>Your name</label>
                                <input
                                    name="name"
                                    onChange={event => this.onChangeName(event.target.value)}
                                    value={this.state.name}
                                />
                                <label>Your email</label>
                                <input
                                    name="email"
                                    onChange={event => this.onChangeEmail(event.target.value)}
                                    value={this.state.email}
                                />
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    onChange={event => this.onChangeMessage(event.target.value)}
                                    value={this.state.message}
                                ></textarea>
                                <button className="btn primary-btn" onClick={this.sendMessage}>Send Enquiry</button>
                            </div>


                            {/* <div className="container-left">
                                <img src={this.props.dataURI} />
                            </div>
                            <div className="container-right">

                            </div> */}
                        </div>
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