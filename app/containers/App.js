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
            openingNext: '',
            pieceURI: null,
            pieceData: null,
            isFirstLoad: true
        };

        this.setFirstLoad = this.setFirstLoad.bind(this);
    }



    updateTimestamp() {
        const timestampRef = Firebase.firestore().collection('timestamp').doc('xw9Lf3HJpB9gYTZB5tKT');

        return timestampRef.update({
            timestamp: Firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    checkTime() {
        const timestampRef = Firebase.firestore().collection('timestamp').doc('xw9Lf3HJpB9gYTZB5tKT');

        return timestampRef.get();
    }

    getPieceData() {
        const dataRef = Firebase.firestore().collection('gallery').doc('piece');

        // TODO: storage permissions
        // TODO: hide data if closed

        return dataRef.get();
    }

    componentDidMount() {
        this.updateTimestamp().then(() => {
            Promise.all([this.checkTime(), this.getPieceData()]).then(result => {
                const timestamp = Date.parse(result[0].data().timestamp);
                const pieceData = result[1].data();
                const opening = Date.parse(pieceData.opening)
                const closing = Date.parse(pieceData.closing)

                if (timestamp > opening && timestamp < closing) {
                    this.setState({
                        isOpen: true,
                        pieceData
                    });

                    const imgRef = Firebase.storage().refFromURL(pieceData.image);
                    imgRef.getDownloadURL().then(imageURL => {
                        this.getDataURI(imageURL, pieceURI => {
                            this.setState({
                                isLoading: false,
                                pieceURI
                            });
                        });
                    });
                }
                else {
                    const openingNext = (timestamp < opening ? result[1].data().opening : result[1].data().opening_next)
                    this.setState({
                        isOpen: false,
                        isLoading: false,
                        openingNext
                    });
                }
            });
        });
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

    setFirstLoad(isFirstLoad) {
        this.setState({isFirstLoad})
    }

    render () {
        if (this.state.isLoading) {
            return (
                <Welcome />
            );
        }
        else if (! this.state.isOpen) {
            return (
                <Closed
                    openingNext={this.state.openingNext}
                />
            );
        }
        else {
            return (
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path='/about' render={props => (
                                <About {...props}
                                    pieceData={this.state.pieceData}
                                />)}
                            />
                            <Route path='/purchase' render={props => (
                                <Purchase {...props}
                                    Firebase={Firebase}
                                    pieceData={this.state.pieceData}
                                />)}
                            />
                            <Route path='/gallery' render={props => (
                                <Gallery {...props}
                                    Firebase={Firebase}
                                    pieceURI={this.state.pieceURI}
                                    pieceData={this.state.pieceData}
                                    isFirstLoad={this.state.isFirstLoad}

                                    setFirstLoad={this.setFirstLoad}
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