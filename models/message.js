const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: { type: String, required: true, maxLength: 100 },
  text: { type: String,required:true},
  added: {type:Date}
});

module.exports = mongoose.model("messages", messageSchema);