const express = require("express");
const path = require("path");       //This module provides utilities for working with file and directory paths.
const Subscribers = require("./src/models/subscribers");
const app = express();        //This line creates an instance of the Express application

// Defining routes
// api to render HTML File || METHOD GET
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//This route handles HTTP GET requests to the root ("/") path. 
//It sends the HTML file named "index.html" located in the same directory as the "app.js" file as the response

// api to get all data || METHOD GET
app.get("/subscribers", async (req, res) => {
  try {
    let subscribers = await Subscribers.find();
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(500);
  }
});

//This route handles HTTP GET requests to the "/subscribers" path. 
//It uses the Mongoose Subscribers model to retrieve all subscribers from the database and send them as the response

// api to get all subscribers by name and subscribed channel || METHOD GET
app.get("/subscribers/names", async (req, res) => {
  try {
    let subscribers = await Subscribers.find({}).select(
      "name subscribedChannel"
    );
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(500);
  }
});

//This route handles HTTP GET requests to the "/subscribers/names" path. 
//It uses the Mongoose Subscribers model to retrieve subscribers' names and subscribed channels from the database and send them as the response.

// api to get subscribers by id || METHOD GET
app.get("/subscribers/:id", async (req, res) => {
  try {
    let subscribers = await Subscribers.findById(req.params.id);
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});
//This route handles HTTP GET requests to the "/subscribers/:id" path. 
//It uses the Mongoose Subscribers model to retrieve a specific subscriber by their ID from the database and send them as the response. 
//The :id in the route path is a URL parameter that can be accessed as req.params.id.

//In each route handler, the res object is used to send responses back to the client. The responses include subscriber data or HTML files

module.exports = app;
