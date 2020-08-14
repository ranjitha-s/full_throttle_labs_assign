const router = require("express").Router();
const fs = require("fs");
require("../data.json");
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add_from_json").post((req, res) => {
  let rawdata = JSON.parse(fs.readFileSync("data.json"));
  let data = rawdata.members;
  for (i = 0; i < data.length; i++) {
    const newUser = new User({
      id: data[i].id,
      name: data[i].real_name,
      location: data[i].tz,
      active_periods: data[i].activity_periods,
    });
    newUser
      .save()
      .then(() => res.json("User added!"))
      .catch((err) => res.status(400).json("Error :" + err));
  }
});

module.exports = router;
