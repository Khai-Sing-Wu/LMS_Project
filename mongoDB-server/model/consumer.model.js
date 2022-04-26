const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Consumer = mongoose.model("Consumer", new Schema({
    id : ObjectId,
    coat: Number,
    jacket : Number,
    jeans : Number,
    shorts : Number,
    shirt : Number,
    suit : Number,
    tshirt : Number,
    undergarment : Number,
    status: String,
    uid : String
}));

module.exports = Consumer;