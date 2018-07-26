const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const dbDataSchema = new Schema({
    _id: String, 
    userName: String,
    favoriteTeam: String,
    gamesBettedNum: Number, 
    score: Number, 
    scoreBoardScore: Number,
    gamesAnswers: {
        GamesBetted:[{
            gameId: String,
            a1: String,
            a2: String,
            a3: String,
            a4: String,
            a5: String
        }]

        
    }
    
}); 

const dbData = mongoose.model("dbData", dbDataSchema);
module.exports = dbData;