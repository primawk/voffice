const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleRegister = async (req, res) => {
  const { name, email, password } = req.body;

  //  can not be empty
  if (!name || !email || !password)
    return res.status(400).json({ message: "name and password are required." });

  //   check for existing names in the database
  const existingName = await User.findAll({ where: { name } });
  const existingEmail = await User.findAll({ where: { email } });
  if (existingName.length || existingEmail.length) return res.sendStatus(409); // 409 Conflict

  try {
    //   encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // store the new user
    const result = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    console.log(result);

    res.status(201).json({ success: `New user ${name} created!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleRegister };
