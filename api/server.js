const express = require("express");
const choresRouter = require("../chores/choresRouter");

const server = express();

server.use(express.json());
server.use("/chores", choresRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "local server" });
});

module.exports = server;
