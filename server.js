const express = require("express");

const router = express.Router;

const server = express();

server.use(express.json());
server.use("/:personId/chores", router);
server.use("/", router);

server.get("/", (req, res) => {
  res.status(200).json({ message: "local server" });
});

module.exports = server;
