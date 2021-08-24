const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routers/auth");
const conversationRouter = require("./routers/conversation");
const messagesRouter = require("./routers/messages");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE;

app.use(express.json());
//app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/auth", authRouter);
app.use("/conversation", conversationRouter);
app.use("/messages", messagesRouter);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
