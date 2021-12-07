const dao = require("./dao");

module.exports = (app) => {
  const findAllProfile = (req, res) =>
    dao.findAllProfile().then((profile) => res.json(profile));

  app.get("/profile", findAllProfile);

  const deleteProfile = (req, res) =>
    dao.deleteProfile(req.params.id).then((status) => res.send(status));

  app.delete("/profile/:id", deleteProfile);

  const createProfile = (req, res) =>
    dao
      .createProfile(req.body)
      .then((insertedProfile) => res.json(insertedProfile));
  app.post("/profile", createProfile);

  const updateProfile = (req, res) =>
    dao
      .updateProfile(req.params.id, req.body)
      .then((status) => res.send(status));

  app.put("/profile/:id", updateProfile);
};
