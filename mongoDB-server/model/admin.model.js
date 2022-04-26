const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Admin = mongoose.model("Admin", new Schema({
    id : ObjectId,
    mail: String,
    password : String
}));

module.exports = Admin;