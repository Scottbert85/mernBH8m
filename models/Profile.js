const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    fName: String,
    lName: String,
    Name: String,
    City: String,
    State: String,
    Avatar: String, //I assume this is a URL to the avatar and not image data
    githubUrl: String,
    twitterUrl: String,
    bio: String
  }
);

module.exports = User = mongoose.model("profile", profileSchema);
