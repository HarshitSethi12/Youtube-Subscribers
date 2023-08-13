const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");
const dotenv = require("dotenv");

// configuration of env
dotenv.config();
// Connect to DATABASE
const DATABASE_URL =
  process.env.DATABASE_URI ||
  "mongodb://localhost:27017/subscriberDB";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));    //This event handler listens for database connection errors and logs the error message to the console.
db.once("open", () => console.log("Database created..."));    //This event handler listens for a successful database connection and logs a "Database created..." message to the console.

const refreshAll = async () => {
  await subscriberModel.deleteMany({});   //This line deletes all documents from the "subscribers" collection.
  await subscriberModel.insertMany(data); //This line inserts the data from the data array into the "subscribers" collection.
  await mongoose.disconnect();
};
refreshAll();

//refreshAll is an asynchronous function that deletes all existing documents in the "subscribers" collection and inserts new data from the data array
