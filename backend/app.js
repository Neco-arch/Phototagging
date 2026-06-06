require('dotenv').config();

const express = require('express');
const cors = require('cors');
const validate = require('./src/Routes/validate.js');

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use('/', validate);


// Start Server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});