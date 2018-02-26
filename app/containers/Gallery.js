import React, { Component } from 'react';

import Img from '../components/Img';
import Loader from '../components/Loader';
import Photo from './Photo';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            imageURL: '',
            dataURI: null
        };
    }

    getDataURI(url, callback) {
        const image = new Image();
        image.setAttribute('crossOrigin', 'anonymous');

        image.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
            canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

            canvas.getContext('2d').drawImage(this, 0, 0);

            // Get raw image data
            // callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

            // ... or get as Data URI
            callback(canvas.toDataURL('image/png'));
        };

        image.src = url;
    }

    componentDidMount() {
        const storage = this.props.Firebase.storage();
        const gsReference = storage.refFromURL('gs://temporary-gallery.appspot.com/testimg1.jpg');
        gsReference.getDownloadURL().then(imageURL => {
            this.getDataURI(imageURL, dataURI => {
                this.setState({dataURI});
            });
        });

    }

    render() {
        if (false) {//this.state.isLoading) {
            return (
                <Loader />
            );
        }
        else {
            return (
                <div>
                    <Img id="image" src={this.state.dataURI} />

                    {/* <Photo imageURL={this.state.imageURL} /> */}
                </div>
            );
        }
    }
}

export default Gallery;