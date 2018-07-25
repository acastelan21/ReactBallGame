const dbData = require("../models/dbData");

module.exports = {
    // this method handles finding all articles in the db
    find: function(req , res) {
      console.log("Talking to database ...");
      dbData.find({_id:req.body._id}).then(function(doc) {
        console.log(doc);
        // res.json(doc);
        console.log(doc.length)
       if(doc.length === 0){
          res.send(false)
       } else {
        res.send(doc)}
      }).catch(function(err) {
        res.json(err);
      });
    },
    insert: function(req, res) {
      console.log("Adding new member to the db");
      console.log("req.body: ", req.body);
      dbData.create(req.body).then(function(doc) {
        res.json(doc);
        console.log("doc created: ", doc);
      }).catch(function(err) {
        res.json(err)
        console.log("CreateError:", err);
      });
    },
    update: function(req, res){
      console.log("updating new member to db"); 
      console.log("_id", req.body._id)
      console.log("req.body", req.body)
      console.log("req.body.gamesAnswers", req.body.gamesAnswers)
      console.log("req.body.gameAnswers.GamesBetted", req.body.gamesAnswers.GamesBetted)
      dbData.update({_id: req.body._id}, {$push:{"gamesAnswers.GamesBetted":req.body.gamesAnswers.GamesBetted}}).then(function(doc){
        res.json(doc);
      
        console.log("doc update:", doc);
        console.log("update is complete");

      }).catch(function(err){
        res.json(err)
        console.log("updateError:", err)
      })
    },
    updateGamesBetted: function(req,res){
      console.log("games betted", req.body.gamesAnswers.GamesBetted.length)
      let gamesBettedOn = req.body.gamesAnswers.GamesBetted.length;
      dbData.update({_id:req.body._id}, {"gamesBettedNum": gamesBettedOn}).then(function(doc1){
      res.json(doc1)
    })
  }
}
