import React from 'react';

import Loader from './Loader';

const style = {
    maxWidth: '320px',
    padding: '0 24px'
}

const PurchaseContent = (props) => {
    return (
        <div style={style}>

            {props.success ? (
                <h3 id="form-success">Your enquiry has been sent.</h3>
            ) : (
                <div id="form">
                    <h3>Enquire about this piece</h3>
                    <p style={{marginBottom: '32px'}}>Have a question, or interested in buying this piece? Send us a message.</p>

                    <label>Your name</label>
                    <input
                        name="fname"
                        type="text"
                        onChange={event => props.onChangeName(event.target.value)}
                        value={props.name}
                    />
                    {props.errors && props.errors.name && <div className="error">Your name is required</div>}

                    <label>Your email</label>
                    <input
                        name="email"
                        type="email"
                        onChange={event => props.onChangeEmail(event.target.value)}
                        value={props.email}
                    />
                    {props.errors && props.errors.email && <div className="error">A valid email is required</div>}

                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="6"
                        onChange={event => props.onChangeMessage(event.target.value)}
                        value={props.message}
                    ></textarea>
                    {props.errors && props.errors.message && <div className="error">A message is required</div>}

                    <button className="btn primary-btn" onClick={props.sendMessage}>Send Enquiry</button>

                    {props.isLoading &&
                        <Loader />
                    }

                    {props.failure &&
                        <div id="form-failure">An error has occured. Try again later.</div>
                    }
                </div>
            )}
        </div>
    );
}

export default PurchaseContent;
