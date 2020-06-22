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
    name: String,
    city: String,
    state: String,
    avatar: String,
    githubUrl: String,
    twitterUrl: String,
    bio: String
  }
);

module.exports = User = mongoose.model("profile", profileSchema);
