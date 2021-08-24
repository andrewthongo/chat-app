const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const router = express.Router();
const saltRounds = 10;

router.post("/register", async (req, res) => {
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
});

router.post("/login", async (req, res) => {
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
});

module.exports = router;

// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const myPlaintextPassword = "s0//P4$$w0rD";
// const someOtherPlaintextPassword = "not_bacon";

// bcrypt.genSalt(saltRounds, function (err, salt) {
//   bcrypt.hash(someOtherPlaintextPassword, salt, function (err, hash) {
//     console.log(hash);
//     bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
//         console.log(result);
//     });
//   });
// });
