const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "This username is already taken" });
    }
    bcrypt.hash(password, saltRounds, async (err, hashedPassword) => {
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();

      const accessToken = jwt.sign(
        { userId: newUser._id },
        process.env.SECRET_ACCESS_TOKEN
      );

      res.json({
        success: true,
        message: "Created",
        accessToken,
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (!result) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect username or password" });
      }

      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.SECRET_ACCESS_TOKEN
      );

      res.json({
        success: true,
        message: "Login successful",
        accessToken,
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { register, login };
