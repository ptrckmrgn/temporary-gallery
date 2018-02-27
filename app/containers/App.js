import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Firebase from 'firebase';
import 'firebase/firestore';
import _ from 'lodash';
import axios from 'axios';

import Welcome from './Welcome';
import Closed from './Closed';
import Open from './Open';
import Gallery from './Gallery';
import About from './About';
import Purchase from './Purchase';

import Loader from '../components/Loader';

const config = {
    apiKey: "AIzaSyD_N34z3wk6qo3vrgKlSB7DH_-UR1Bl3qA",
    authDomain: "temporary-gallery.firebaseapp.com",
    databaseURL: "https://temporary-gallery.firebaseio.com",
    projectId: "temporary-gallery",
    storageBucket: "gs://temporary-gallery.appspot.com",
    messagingSenderId: "169809673104"
};
Firebase.initializeApp(config);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            isOpen: true,
        };
    }

    componentDidMount() {
        // axios.get('/timestamp').then(response => {
        //     const timestamp = response.data;
        //     const isOpen = _.floor(timestamp / 1000 / 60 % 2) == 0 ? true : false;
        //
        //     this.setState({
        //         timestamp,
        //         isOpen,
        //         isLoading: false
        //     });
        // });
        // const timestampRef = Firebase.firestore().collection('timestamp').doc('xw9Lf3HJpB9gYTZB5tKT');
        // timestampRef.update({
        //     value: Firebase.firestore.FieldValue.serverTimestamp()
        // }).then(result => {
        //     timestampRef.get().then(snapshot => {
        //         const timestamp = Date.parse(snapshot.data().value);
        //         const isOpen = _.floor(timestamp / 1000 / 60 % 2) == 0 ? true : false;
        //         this.setState({
        //             isOpen,
        //             isLoading: false
        //         });
        //     });
        // });
    }

    render () {
        if (this.state.isLoading) {
            return (
                <Welcome />
            );
        }
        else if (! this.state.isOpen) {
            return (
                <Closed />
            );
        }
        else {
            return (
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path='/gallery/:fullscreen' component={Gallery} />
                            <Route path='/gallery' component={Gallery} />
                            {/* render={props => (<Gallery {...props} Firebase={Firebase} isOpen={this.state.isOpen} />)} /> */}
                            <Route path='/about' component={About} />
                            <Route path='/purchase' component={Purchase} />
                            <Route path='/' component={Open} />
                        </Switch>
                        {/* <Navigation /> */}
                    </div>
                </BrowserRouter>
            );
        }
    }
}

export default App;