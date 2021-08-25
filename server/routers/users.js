const express = require("express");
const controllers = require("../controllers/users");

const router = express.Router();

router.post("/register", controllers.register);

router.post("/login", controllers.login);

router.get("/", controllers.users);

module.exports = router;
