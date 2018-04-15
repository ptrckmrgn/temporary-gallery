const functions = require('firebase-functions');
const express = require('express');
const _ = require('lodash');

const app = express();

// app.get('/', (req, res) => res.send('Hello World!'))

app.all('*', (request, response) => {
    const timestamp = _.now();
    const isOpen = _.floor(timestamp / 1000 / 60 % 2) === 0 ? true : false;
    // console.log();
    // response.send('Hello World!');
    if (isOpen) {
        response.redirect('/open');
    }
    else {
        response.redirect('/closed');
    }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// exports.timestamp = functions.https.onRequest((request, response) => {
//     const time = _.now();
//     response.status(200).send(_.toString(time));
// });



// axios.get('/timestamp').then(response => {
//     const timestamp = response.data;
//     const isOpen = _.floor(timestamp / 1000 / 60 % 2) == 0 ? true : false;
//
//     this.setState({
//         timestamp,
//         isOpen,
//         isLoading: false
//     });
// });