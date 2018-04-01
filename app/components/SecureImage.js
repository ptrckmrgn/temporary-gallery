import React, { Component } from 'react';
import _ from 'lodash';

class SecureImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null
        };
    }

    componentWillMount() {
        const id = 'si-' + _.random(0,99999999);
        this.setState({id});
    }

    componentDidMount() {
        window.onresize = () => {
            this.resizePiece(this.state.imgWidth, this.state.imgHeight);
        }

        const img = new Image();
        img.onload = () => {
            this.setState({
                imgWidth: img.width,
                imgHeight: img.height
            });
            this.resizePiece(img.width, img.height);
        }
        img.src = this.props.url;
    }

    resizePiece(naturalWidth, naturalHeight) {
        if (naturalWidth != 0 && naturalHeight != 0) {
            const si = document.querySelector(`#${this.state.id}`);
            const parent = si.parentElement;
            const ratio = _.min([parent.offsetWidth / naturalWidth,
                        parent.offsetHeight / naturalHeight]);
            this.setState({
                scaledWidth: ratio * naturalWidth,
                scaledHeight: ratio * naturalHeight
            });
        }
    }

    render() {
        const style = {
            backgroundImage: `url('${this.props.url}')`,
            width: this.state.scaledWidth + 'px',
            height: this.state.scaledHeight + 'px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0,0,0,0.5)'
        }

        return (
            <div id={this.state.id} className="secure-image" style={style}></div>
        );
    }
}

export default SecureImage;
