import React, { Component } from 'react';

import SecureImage from '../components/SecureImage';
import PurchaseContent from '../components/PurchaseContent';
import Navigation from './Navigation';

class Purchase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavActive: true,
            name: '',
            email: '',
            message: ''
        };

        this.onClickToggleNav = this.onClickToggleNav.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    onClickToggleNav() {
        this.setState({isNavActive: !this.state.isNavActive});
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
            <div id="purchase">
                <Navigation
                    isActive={this.state.isNavActive}
                    activePage={'purchase'}
                    onClickToggle={this.onClickToggleNav}
                    data={this.props.data}
                />
                <div className={`page ${this.state.isNavActive ? 'active' : ''}`}>
                    <PurchaseContent
                        name={this.state.name}
                        email={this.state.email}
                        message={this.state.message}

                        onChangeName={this.onChangeName}
                        onChangeEmail={this.onChangeEmail}
                        onChangeMessage={this.onChangeMessage}
                        sendMessage={this.sendMessage}
                    />
                </div>
                {/* <Navigation
                    navShown='true'
                    active='purchase'
                /> */}
            {/* <div id="purchase" className="page-wrapper has-navigation">
                <section>
                    <div className="container content">
                        <div className="row">
                            <div className="one-half column">
                                <div className="canvas-wrapper">
                                    <SecureImage
                                        url={this.props.imgURI}
                                    />
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
                        </div>
                    </div>
                </section> */}

            </div>
        );
    }
}

export default Purchase;