const express = require('express');
const app = express();
const items = require('./routes/item');
const users = require('./routes/user');

// app.get('/', (req, res) => {
//     res.send('Hello from nodejs!')
// })
app.use(express.json())

app.use('/api/v1', items);
app.use('/api/v1', users);

module.exports = app