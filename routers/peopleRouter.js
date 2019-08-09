const express = require("express");

const router = express.Router();

let people = [
  { id: 1, name: "Robert Jordan" },
  { id: 2, name: "Rand al'Thor" }
];

let peopleId = 2;

router.post("/", (req, res) => {
  people.push(req.body);
});

router.get("/", (req, res) => {});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;
