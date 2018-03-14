import React, { Component } from 'react';

import Img from '../components/Img';
import Loader from '../components/Loader';

class Piece extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.getDataURI(this.props.imageURL, dataURI => {
            this.setState({dataURI});
        });
    }

    render() {
        return (
            <section>
                <Img id="image" src={this.state.dataURI} />
                {/* <img id="image" ref={(ref) => this.imgRef = ref} /> */}
            </section>
        );
    }
}

export default Piece;