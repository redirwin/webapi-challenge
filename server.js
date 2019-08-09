const express = require("express");

const myRouter = require("./router");

const server = express();

server.use(express.json());
server.use("/:personId/chores", myRouter);
server.use("/", myRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "local server" });
});

module.exports = server;
