const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    _id: String,
    email: String,
    name: String,
    role: Number,
    description: { type: String, default: "I am a new" },
    date: { type: Date, default: Date.now() },
    followers: { type: Array, default: [] },
    followings: { type: Array, default: [] },
    movieList: { type: Array, default: [] },
  },
  { collection: "profile", versionKey: false }
);
module.exports = schema;
