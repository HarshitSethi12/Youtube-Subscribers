const data = [
    {
      "name": "Jeread Krus",
      "subscribedChannel": "CNET"
    },
    {
      "name": "John Doe",
      "subscribedChannel": "freeCodeCamp.org"
    },
    {
      "name": "Lucifer",
      "subscribedChannel": "Sentex"
    }
]

module.exports = data;

//this "data.js" file provides a structured way to define the initial data that we want to insert into the "subscribers" collection in the MongoDB database. 
//The createDatabase.js script uses this data to populate the collection when it's run.