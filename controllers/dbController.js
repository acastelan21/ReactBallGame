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
    },
    insert: function(req, res) {
      console.log("Adding new member to the db");
      console.log("req.body: ", req.body);
      dbData.create(req.body).then(function(doc) {
        res.json(doc);
        console.log("doc: ", doc);
      }).catch(function(err) {
        res.json(err)
        console.log("err");
      });
    },
}
