const express = require("express");
const controllers = require("../controllers/messages");
const verifyToken = require("../middlewares/auth")

const router = express.Router();

router.post("/", verifyToken, controllers.addMessage);

router.get("/:conversationId", verifyToken, controllers.getMessage);

module.exports = router;
