import React, { Component } from 'react';

import SecureImage from '../components/SecureImage';
import PurchaseContent from '../components/PurchaseContent';
import Navigation from './Navigation';

class Purchase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
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
            <div id="purchase" className="nav-active">
                <Navigation
                    isNavActive={true}
                    activePage={'purchase'}
                    pieceData={this.props.pieceData}
                />
                <div className="page">
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
            </div>
        );
    }
}

export default Purchase;