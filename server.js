'use strict';

// NOTE: Don't change the port number
const PORT = 3500;

// const cors = require('cors');
const express = require("express");
const app = express();
require('dotenv').config();
app.use(express.static('public'));
// app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

/**
 * Route handler for POST request to the URL /hello
 */
app.post("/hello", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Hi ${name}. Your email is ${email}. The request was sent using the HTTP method POST`);
});

/**
 * Route handler for GET request to the URL /hello
 */
app.get("/hello", (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    res.send(`Hi ${name}. Your email is ${email}. The request was sent using the HTTP method GET`);
});

/**
 * Route handler for POST request to the URL /login
 */
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.redirect('/connect.html')
});

/**
 * Route handler for POST request to the URL /create-playlist
 */
app.post("/create-playlist", (req, res) => {
    res.redirect('/playlist.html');
});

/**
 * Route handler for POST request to the URL /connectmusic
 */
app.post("/connect-music", (req, res) => {
    res.redirect('/home.html')
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});