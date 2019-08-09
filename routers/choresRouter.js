const express = require("express");

const router = express.Router();

// const Chores = require("./choresDb");

let chores = [];

let idPlaceholder = 0;

router.post("/", (req, res) => {
  chores.push(req.body);
});

router.get("/", (req, res) => {});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;
