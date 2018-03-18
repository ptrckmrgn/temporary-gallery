import React, { Component } from 'react';

import SecureImage from '../components/SecureImage';
import Navigation from '../components/Navigation';

class Purchase extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            this.resizePiece(img.width, img.height);
        }
        img.src = this.props.imgURI;
    }

    resizePiece(naturalWidth, naturalHeight) {
        if (naturalWidth != 0 && naturalHeight != 0) {
            const si = document.querySelector(`#secure-image`);
            const parent = si.parentElement;
            const ratio = parent.offsetWidth / naturalWidth;
            this.setState({
                scaledWidth: ratio * naturalWidth,
                scaledHeight: ratio * naturalHeight
            });
        }
    }

    render() {
        const secureImageStyle = {
            backgroundImage: `url('${this.props.imgURI}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: this.state.scaledWidth,
            height: this.state.scaledHeight
        }

        return (
            <div id="purchase" className="page-wrapper has-navigation">
                <section>
                    <div className="container content">
                        <div className="row">
                            <div className="one-half column">
                                <div className="canvas-wrapper">
                                    <div className="canvas">
                                        <div id="secure-image" style={secureImageStyle}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="one-half column">
                                <h3 style={{marginBottom: '16px'}}>${this.props.data.price}.00</h3>
                                <h4>{this.props.data.artist}</h4>
                                <h5 style={{marginBottom: '8px'}}>{this.props.data.piece}</h5>
                                <h6>{this.props.data.medium}</h6>
                                <h6 style={{marginBottom: '24px'}}>{this.props.data.dimensions}</h6>

                                <p style={{marginBottom: '32px'}}>Have a question, or interested in buying this piece? Send us a message.</p>

                                <label>Your email</label>
                                <input />
                                <label>Message</label>
                                <textarea rows="6"></textarea>

                                <button className="btn primary-btn">Send Enquiry</button>
                            </div>


                            {/* <div className="container-left">
                                <img src={this.props.dataURI} />
                            </div>
                            <div className="container-right">

                            </div> */}
                        </div>
                    </div>
                </section>
                <Navigation
                    navShown='true'
                    active='purchase'
                />
            </div>
        );
    }
}

export default Purchase;