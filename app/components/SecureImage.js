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
        const unique = 'si-' + _.random(0,99999999);
        this.setState({id: unique});
    }

    componentDidMount() {
        this.getParentSize();
    }

    getParentSize() {
        const si = document.querySelector(`#${this.state.id}`);
        const parent = si.parentElement;

        const image = new Image();
        image.onload = () => {
            const siWidth = image.width;
            const siHeight = image.height;

            const ratio = parent.offsetWidth / siWidth;
            si.style.width = ratio * siWidth + 'px';
            si.style.height = ratio * siHeight + 'px';
        }
        image.src = this.props.url;
    }

    render() {
        const style = {
            backgroundImage: `url('${this.props.url}')`,
            width: this.props.width + 'px',
            height: this.props.height + 'px',
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
