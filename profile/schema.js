const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    _id: String,
    email: String,
    name: String,
    role: Number,
  },
  { collection: "profile", versionKey: false }
);
module.exports = schema;
