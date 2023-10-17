// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server on a specific port (e.g., 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
