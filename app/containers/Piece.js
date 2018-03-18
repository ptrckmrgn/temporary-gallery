import React, { Component } from 'react';
import _ from 'lodash';

import SecureImage from '../components/SecureImage';

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

        const img = new Image();
        img.onload = () => {
            this.setState({
                imgWidth: img.width,
                imgHeight: img.height
            });
            // this.props.isPieceLoaded();
            this.resizePiece(img.width, img.height);
        }
        img.src = this.props.src;
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.src != null && nextProps.src != this.props.src){
    //         const img = new Image();
    //         img.onload = () => {
    //             this.setState({
    //                 imgWidth: img.width,
    //                 imgHeight: img.height
    //             });
    //             this.props.isPieceLoaded();
    //             this.resizePiece(img.width, img.height);
    //         }
    //         img.src = nextProps.src;
    //     }
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState);
    }

    resizePiece(naturalWidth, naturalHeight) {
        if (naturalWidth != 0 && naturalHeight != 0) {
            const wrapper = document.querySelector('#canvas-wrapper');
            const ratio = _.min([wrapper.offsetWidth / naturalWidth,
                        wrapper.offsetHeight / naturalHeight]);
            console.log(ratio, naturalWidth, naturalHeight);
            this.setState({
                scaledWidth: ratio * naturalWidth,
                scaledHeight: ratio * naturalHeight
            });
        }
    }

    render() {
        return (
            <section id="piece">
                <div id="left-wire" className="wire"></div>
                <div id="right-wire" className="wire"></div>
                {/* <div id="canvas-wrapper">
                    <div id="canvas" style={{backgroundImage: `url('${this.props.src}')`}}></div>
                </div> */}
                <div id="canvas-wrapper">
                    <div id="canvas">
                        <SecureImage
                            url={this.props.src}
                            width={this.state.scaledWidth}
                            height={this.state.scaledHeight}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Piece;