const express = require('express');
const app = express();
const connectDB = require('./db');
require('dotenv').config();

const port = process.env.PORT || 8082;

connectDB();

app.use('/', (req, res) => {
	res.send('Hello World');
});

app.listen(port, () => {
	console.log(`Server Running: ${port}`);
});
