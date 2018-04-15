import React, { Component } from 'react';
import moment from 'moment';

class Closed extends Component {
    render() {
        const style = {
            minHeight: '300px',
            textAlign: 'center'
        }

        const opening = moment(this.props.openingNext).format('h:mma, Do MMMM YYYY');

        return (
            <div id="closed" className="page">
                <div style={style}>
                    <h1>IAGO</h1>
                    <h3>Sorry this website is closed.</h3>
                    <p style={{color: '#aaa'}}>We will be open again at <span style={{color: '#666', fontWeight: 'bold'}}>{opening}</span></p>
                </div>
            </div>
        );
    }
}

export default Closed;