const model = require("./model");

const findAllProfile = () => model.find();

const findProfileById = (id) => model.findById(id);

const deleteProfile = (id) => model.deleteOne({ _id: id });

const createProfile = (profile) => model.create(profile);

const updateProfile = (id, profile) =>
  model.updateOne({ _id: id }, { $set: profile });

const addMovie = (id, profile) =>
  model.updateOne({ _id: id }, { $set: profile });

module.exports = {
  findAllProfile,
  findProfileById,
  deleteProfile,
  createProfile,
  updateProfile,
  addMovie,
};
