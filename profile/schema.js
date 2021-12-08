const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    _id: String,
    email: String,
    name: String,
    role: Number,
    date: { type: Date, defaultValue: Date.now },
    friendList: { type: Array, default: [] },
    movieList: { type: Array, default: [] },
  },
  { collection: "profile", versionKey: false }
);
module.exports = schema;
