const express = require('express');
const app = express();
const items = require('./routes/item');

// app.get('/', (req, res) => {
//     res.send('Hello from nodejs!')
// })
app.use('/api/v1', items);

module.exports = app