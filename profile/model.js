const mongoose = require("mongoose");
const schema = require("./schema");
const model = mongoose.model("ProfileModel", schema);
module.exports = model;
