const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    _id: String,
    email: String,
    name: String,
    date: { type: Date, defaultValue: Date.now },
    role: Number,
  },
  { collection: "profile" }
);
module.exports = schema;

