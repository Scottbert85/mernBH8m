const express = require("express");
const router = express.Router();
const Profile = require("../../models/Profile");

//Basic post route. Expects an entire profile in JSON.
router.post("/", async (req, res) => {
  console.log("POST request received:");
  console.log(req.body);
  try {
    const profile = new Profile({
      userId: req.body.userId,
      fName: req.body.fName,
      lName: req.body.lName,
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      avatar: req.body.avatar,
      githubUrl: req.body.githubUrl,
      twitterUrl: req.body.twitterUrl,
      bio: req.body.bio
    });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;