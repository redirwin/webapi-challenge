const express = require("express");
const choresRouter = require("../routers/choresRouter");
const peopleRouter = require("../routers/peopleRouter");

const server = express();

server.use(express.json());
server.use("/:personId/chores", choresRouter);
server.use("/", peopleRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "local server" });
});

module.exports = server;
