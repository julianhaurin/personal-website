// Julian Haurin Personal Website - 9/6/2023

// Express.js server setup 
const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

require('dotenv').config({ path: './config.env' });
const PORT = process.env.PORT || 5000;
const URI = process.env.ATLAS_URI;

// MongoDB setup
const mongoose = require('mongoose');
mongoose.connect(URI);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Express.js server successfully connected to MongoDB'); 

});

// Routing
app.get('/', (req, res) => {
  res.send('Hello World!')
})  

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


