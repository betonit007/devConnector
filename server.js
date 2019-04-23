const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


const app = express();

app.get('/', (req, res)=> res.send('hello world'));

//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/devConnector")
  .then(() => console.log('Now connected to MongoDB-devConnector!'))
  .catch(err => console.error('Error connection to MongoDB - devConnector', err));

app.listen(port, () => console.log(`Server running on port ${port}`));