const User = require("../models/User");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "name and password are required." });
  const foundUser = await User.findOne({ where: { email } });
  if (!foundUser) return res.sendStatus(401); // Unauthorized
  const username = foundUser.name;

  //   evaluate password
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    res.json({ username, email });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
