const express = require('express');
const app = express();
const port = 3000; // Define the port number

// Middleware function to log request URL
const loggerMiddleware = (req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next(); // Call the next middleware function
};

// Register the middleware
app.use(loggerMiddleware);

// Route handler
app.get('/', (req, res) => {
    res.send("Welcome to middleware session with Adwaith Sir");
});

// Start the server
app.listen(port, () => {
    console.log("App is running at http://localhost:" + port);
});