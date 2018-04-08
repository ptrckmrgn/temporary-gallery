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
            isLoading: true,
            isOpen: true,
            imgURI: null,
            data: null,
        };
    }

    componentDidMount() {
        const dataRef = Firebase.firestore().collection('gallery').doc('piece');

        // TODO: storage permissions
        // TODO: hide data if closed

        dataRef.get().then(doc => {
            const pieceData = doc.data();
            this.setState({
                data: pieceData,
            });

            const imgRef = Firebase.storage().refFromURL(pieceData.image);
            imgRef.getDownloadURL().then(imageURL => {
                this.getDataURI(imageURL, imgURI => {
                    this.setState({
                        imgURI,
                        isLoading: false
                    });
                });
            });
        }).catch(error => {
            console.log("Error getting document:", error);
        });

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

    getDataURI(url, callback) {
        const image = new Image();
        image.setAttribute('crossOrigin', 'anonymous');
        image.onload = function() {
            var canvas3 = document.createElement('canvas');
            canvas3.width = this.naturalWidth; // or 'width' if you want a special/scaled size
            canvas3.height = this.naturalHeight; // or 'height' if you want a special/scaled size

            canvas3.getContext('2d').drawImage(this, 0, 0);

            // Get raw image data
            // callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

            // ... or get as Data URI
            callback(canvas3.toDataURL('image/png'));
        };
        image.src = url;
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
                            {/* <Route path='/about' component={About} /> */}
                            {/* <Route path='/purchase' component={Purchase} /> */}
                            <Route path='/about' render={props => (
                                <About {...props}
                                    data={this.state.data}
                                />)}
                            />
                            <Route path='/purchase' render={props => (
                                <Purchase {...props}
                                    Firebase={Firebase}
                                    data={this.state.data}
                                    imgURI={this.state.imgURI}
                                />)}
                            />
                            <Route path='/gallery' render={props => (
                                <Gallery {...props}
                                    Firebase={Firebase}
                                    imgURI={this.state.imgURI}
                                    data={this.state.data}
                                />)}
                            />
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