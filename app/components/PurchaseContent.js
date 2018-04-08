import React from 'react';

const style = {
    maxWidth: '320px',
    padding: '0 16px'
}

const PurchaseContent = (props) => {
    return (
        <div style={style}>
            <p style={{marginBottom: '32px'}}>Have a question, or interested in buying this piece? Send us a message.</p>

            <label>Your name</label>
            <input
                name="name"
                onChange={event => props.onChangeName(event.target.value)}
                value={props.name}
            />
            <label>Your email</label>
            <input
                name="email"
                onChange={event => props.onChangeEmail(event.target.value)}
                value={props.email}
            />
            <label>Message</label>
            <textarea
                name="message"
                rows="6"
                onChange={event => props.onChangeMessage(event.target.value)}
                value={props.message}
            ></textarea>
            <button className="btn primary-btn" onClick={props.sendMessage}>Send Enquiry</button>
        </div>
    );
}

export default PurchaseContent;
