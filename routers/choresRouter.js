const express = require("express");

const router = express.Router();

let chores = [];

let choresId = 0;

router.post("/", (req, res) => {
  chores.push(req.body);
});

router.get("/", (req, res) => {});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;
