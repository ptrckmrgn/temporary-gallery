import React, { Component } from 'react';
import validate from 'validate.js';

import SecureImage from '../components/SecureImage';
import PurchaseContent from '../components/PurchaseContent';
import Navigation from './Navigation';

class Purchase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            errors: null,
            isLoading: false,
            success: false,
            failure: false
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
        const errors = validate({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }, {
            name: {presence: {allowEmpty: false}},
            email: {email: true},
            message: {presence: {allowEmpty: false}}
        });

        if (errors) {
            this.setState({errors});
        }
        else {
            this.setState({errors, isLoading: true});
            this.props.Firebase.firestore().collection('messages').add({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }).then(() => {
                this.setState({success: true, isLoading: false})
            }).catch(() => {
                this.setState({failure: true, isLoading: false})
            });
        }
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
                        errors={this.state.errors}
                        isLoading={this.state.isLoading}
                        success={this.state.success}
                        failure={this.state.failure}

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