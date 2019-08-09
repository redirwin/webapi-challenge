const express = require("express");
const choresRouter = require("../chores/choresDb");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ message: "local server" });
});

module.exports = server;
