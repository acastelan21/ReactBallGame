const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); 
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const dbController = require("./controllers/dbController");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("client/build")); 


// Get saved articles
app.get("/api/database", dbController.find);


app.use(function(req,res){
    res.sendFile(path.join(__dirname, "client/build/index.html"));
})
//connect to Mongo DB
const db = process.env.MONGODB_URI || "mongodb://localhost:27017/ballGamedb";
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

app.listen(PORT, function(){
    console.log(`API Server listening on port ${PORT}`)
});

