const express = require("express");

const router = express.Router();

let peopleId = 2;
let choresId = 0;

let people = [
  { id: 1, name: "Robert Jordan" },
  { id: 2, name: "Rand al'Thor" }
];

let chores = [];

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
});

router.post("/", (req, res) => {
  chores.push(req.body);
});

router.get("/", (req, res) => {});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;
