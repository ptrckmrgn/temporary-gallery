import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-artist">{props.data.artist}</div>
            <div className="card-price">${props.data.price}</div>
            <div>
                <span className="card-title">{props.data.title}</span>
                <span className="card-year">({props.data.year})</span>
            </div>
            <div className="card-medium">{props.data.medium}</div>
            <div className="card-dimensions">{props.data.dimensions}</div>
            <div className="card-description">{props.data.description}</div>
        </div>
    );
}

export default Card;
