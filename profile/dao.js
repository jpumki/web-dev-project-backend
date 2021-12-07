const model = require("./model");

const findAllProfile = () => model.find();

const deleteProfile = (id) => model.deleteOne({ _id: id });

const createProfile = (profile) => model.create(profile);

const updateProfile = (id, profile) =>
  model.updateOne({ _id: id }, { $set: profile });

module.exports = {
  findAllProfile,
  deleteProfile,
  createProfile,
  updateProfile,
};
