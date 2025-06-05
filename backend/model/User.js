const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String, required: true },
  profilePhoto: { type: String, required: true },
  linkedin: { type: String },
  
});
const User = mongoose.model("Redients", userSchema);
module.exports = User;
