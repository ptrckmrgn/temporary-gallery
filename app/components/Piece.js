import React, { Component } from 'react';
import _ from 'lodash';

class Piece extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgWidth: 0,
            imgHeight: 0
        };
    }

    componentDidMount() {
        window.onresize = () => {
            this.resizePiece(this.state.imgWidth, this.state.imgHeight);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.src != null && nextProps.src != this.props.src){
            const img = new Image();
            img.onload = () => {
                this.setState({
                    imgWidth: img.width,
                    imgHeight: img.height
                });
                this.props.isPieceLoaded();
                this.resizePiece(img.width, img.height);
            }
            img.src = nextProps.src;
        }
    }

    resizePiece(naturalWidth, naturalHeight) {
        if (naturalWidth != 0 && naturalHeight != 0) {
            const wrapper = document.querySelector('#canvas-wrapper');
            const ratio = _.min([wrapper.offsetWidth / naturalWidth,
                        wrapper.offsetHeight / naturalHeight]);

            canvas.style.width = ratio * naturalWidth + 'px';
            canvas.style.height = ratio * naturalHeight + 'px';
        }
    }

    render() {
        return (
            <div id="piece">
                <div id="left-wire" className="wire"></div>
                <div id="right-wire" className="wire"></div>
                <div id="canvas-wrapper">
                    <div id="canvas" style={{backgroundImage: `url(${this.props.src})`}}></div>
                </div>
            </div>
        );
    }
}

export default Piece;