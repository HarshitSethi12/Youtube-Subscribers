const express = require("express");   //web framework for building applications with Node.js.
const app = require("./app.js");      //importing app.js file.
const mongoose = require("mongoose");   //Object-Document Mapping (ODM) library for MongoDB, used for interacting with the MongoDB database.
const dotenv = require("dotenv");     //This module is used to read and load environment variables from a .env file.

// configuring env
dotenv.config();                    //This line loads environment variables from a .env file into process.env. 
                                    //This is used to store sensitive or configurable information outside of our code.

// Parse JSON bodies (as sent by API clients)
app.use(express.json());            //This middleware parses incoming JSON data from API requests and populates req.body with the parsed data.
app.use(express.urlencoded({ extended: false }));   //This middleware parses incoming URL-encoded data and populates req.body with the parsed data. 
                                                    //The extended: false option means the values in the URL-encoded data are strings or arrays.

// Connect to DATABASE

const DATABASE_URL =
  process.env.DATABASE_URI ||
  "mongodb://localhost:27017/subscriberDB";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//The above code is used to makw the connection to database and options such as useNewUrlParser and useUnifiedTopology to ensure compatibility with the latest MongoDB driver

// This method establishes a connection to the MongoDB database using the DATABASE_URL and 
//options such as useNewUrlParser and useUnifiedTopology to ensure compatibility with the latest MongoDB driver

const db = mongoose.connection;  //The line "const db = mongoose.connection;" is creating a variable named db and assigning it the value of the connection object provided by the Mongoose library.
db.on("error", (err) => console.log(err));  //This event handler listens for database connection errors and logs the error message to the console
db.once("open", () => console.log("connected to database"));

// Start Server
const port = process.env.PORT || 3000;                                    //This variable holds the port number on which the server should listen.
app.listen(port, () => console.log(`App listening on port ${port}!`));    //This method starts the Express server to listen on the specified port. Once the server is up and running, it logs a message to the console.
