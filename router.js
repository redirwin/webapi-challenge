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
  const id = req.params.id - 1;
  if (people[id]) {
    console.log("Good ID!");
    res.status(200).json({});
  } else {
    console.log("Bad ID!");
    res.status(400).json({ message: "A person with that ID does not exist." });
  }
});

router.get("/:id/chores", (req, res) => {
  const id = req.params.id - 1;
  console.log(people[id]);
});

router.post("/", (req, res) => {
  chores.push(req.body);
});

router.get("/", (req, res) => {});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;
