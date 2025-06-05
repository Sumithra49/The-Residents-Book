const User = require("../model/User");

const addUser = async (req, res) => {
  try {
    const { firstName, lastName, title, profilePhoto, linkedin } = req.body;
    if (!firstName || !lastName || !title) {
      return res
        .status(400)
        .json({ message: "First Name,Last Name and Title are required" });
    }
    const newResident = new User({
      firstName,
      lastName,
      title,
      profilePhoto,
      linkedin,
    });
    const save = await newResident.save();
    res.status(201).json(save);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add resident", error: error.message });
  }
};

const getResidents = async (req, res) => {
  try {
    const residents = await User.find();
    res.status(200).json(residents);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch", error: err.message });
  }
};

module.exports = { addUser, getResidents };
