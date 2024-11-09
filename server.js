// Setup empty JS object to act as endpoint for all routes
projectData = {
    temperature : "hot"
};

// Require Express to run server and routes
const express = require('express');

const app = express();

// Start up an instance of app

/* Middleware*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port, listening);
function listening() {
    console.log(`running on localhost:${port}`);
}

app.get('/all', sendData);

function sendData(request, response) {
    response.send(projectData);
    console.log("sent-data");
}