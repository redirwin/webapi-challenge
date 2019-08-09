const express = require("express");
const choresRouter = require("../routers/choresRouter");

const server = express();

server.use(express.json());
server.use("/:personId/chores", choresRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "local server" });
});

module.exports = server;
