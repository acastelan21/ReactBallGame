const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const dbDataSchema = new Schema({
    title: String,
    
}); 

const dbData = mongoose.model("dbData", dbDataSchema);
module.exports = dbData;