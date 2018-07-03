const dbData = require("../models/dbData");

module.exports = {
    // this method handles finding all articles in the db
    find: function(req, res) {
      console.log("Talking to database ...");
      dbData.find().then(function(doc) {
        console.log(doc);
        res.json(doc);
        
      }).catch(function(err) {
        res.json(err);
      });
    }
}
