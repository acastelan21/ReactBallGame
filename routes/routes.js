const dbController = require("../controllers/dbController");
module.exports = (app) => {
    app.post("/api/database", dbController.find);
    app.post("/api/saved", dbController.insert);
    app.post("/api/update", dbController.update); 
    app.post("/api/updateCount", dbController.updateGamesBetted);
    app.get("/api/answersKey", dbController.findAnswers);
    app.post("/api/sendScore",dbController.sendScoreDb );
}

