const mongoose = require('mongoose');      //imports the Mongoose library, which is used for defining schemas, models, and interacting with MongoDB.

const susbcriberSchema = new mongoose.Schema({  //This variable defines a new Mongoose schema using the mongoose.Schema constructor.
    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {       //Represents the date when the subscriber was created. It's defined as a required date field with a default value of the current date and time using Date.now
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Subscriber',susbcriberSchema);     //This line exports a Mongoose model based on the defined schema. The model is named "Subscriber", and it uses the subscriberSchema as its schema definition

//This file defines a Mongoose schema and model for the "subscribers" collection in our MongoDB database