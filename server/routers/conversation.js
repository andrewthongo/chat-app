const express = require("express");
const controllers = require("../controllers/conversation");
const verifyToken = require("../middlewares/auth")

const router = express.Router();

router.post("/", verifyToken, controllers.addConversation);

router.get("/:userId", verifyToken, controllers.getConversation);

module.exports = router;
