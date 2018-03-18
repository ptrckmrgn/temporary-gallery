import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Piece from './Piece';
import Loader from '../components/Loader';
import Navigation from '../components/Navigation';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // dataURI: null,
            // pieceLoaded: this.props.dataURI ? true : false,
            introHidden: false,
            navShown: false
        };

        this.isIntroHidden = this.isIntroHidden.bind(this);
        this.isPieceLoaded = this.isPieceLoaded.bind(this);
        this.isNavShown = this.isNavShown.bind(this);
    }

    // componentDidMount() {
    //     const storage = this.props.Firebase.storage();
    //     const gsReference = storage.refFromURL('gs://temporary-gallery.appspot.com/testimg4.png');
    //     // TODO: storage permissions
    //     gsReference.getDownloadURL().then(imageURL => {
    //         this.getDataURI(imageURL, dataURI => {
    //             this.setState({dataURI});
    //         });
    //     });
    // }

    // getDataURI(url, callback) {
    //     const image = new Image();
    //     image.setAttribute('crossOrigin', 'anonymous');
    //
    //     image.onload = function() {
    //         var canvas = document.createElement('canvas');
    //         canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
    //         canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
    //
    //         canvas.getContext('2d').drawImage(this, 0, 0);
    //
    //         // Get raw image data
    //         // callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));
    //
    //         // ... or get as Data URI
    //         callback(canvas.toDataURL('image/png'));
    //     };
    //
    //     image.src = url;
    // }

    isIntroHidden() {
        this.setState({introHidden: true});
    }

    isPieceLoaded() {
        this.setState({pieceLoaded: true});
    }

    isNavShown() {
        this.setState({navShown: !this.state.navShown});
    }

    render() {
        return (
            <div id="gallery" className="page">
                {/* <div id="gallery-piece" className={`page has-navigation hide ${this.state.introHidden ? 'show' : ''}`}> */}
                <div id="gallery-piece" className="page has-navigation">
                    <Piece
                        id="canvas"
                        src={this.props.imgURI}
                        isPieceLoaded={this.isPieceLoaded}
                    />
                    <Navigation
                        navShown={this.state.navShown}
                        isNavShown={this.isNavShown}
                        active="home"
                    />
                </div>
            </div>
        );
    }
}

export default Gallery;