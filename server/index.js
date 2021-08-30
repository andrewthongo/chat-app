const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRouter = require("./routers/users");
const conversationRouter = require("./routers/conversation");
const messagesRouter = require("./routers/messages");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const server = require("http").createServer(app);
const PORT = process.env.PORT || 5000;
const URI = process.env.DATABASE;

const io = require("socket.io")(server, {
  cors: {
    // origin: ["https://heuristic-bose-66c789.netlify.app"],
    origin: ["http://localhost:3000"],
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log(socket.id + " connected");

  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ sender, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", { sender, text });
  });

  socket.on("disconnect", () => {
    console.log(socket.id + " disconnected");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
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
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
