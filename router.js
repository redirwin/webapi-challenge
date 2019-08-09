const express = require("express");

const router = express.Router();

let choreId = 0;
console.log("Chore ID: ", choreId);

let people = [
  { id: 1, name: "Robert Jordan" },
  { id: 2, name: "Rand al'Thor" }
];

let chores = [];

router.get("/", (req, res) => {
  res.status(200).json(chores);
});

router.get("/:userId", (req, res) => {
  const id = req.params.userId;
  const completed = req.query.completed || "all";
  if (people[id - 1]) {
    let personChores = chores.filter(chore => chore.assignedTo == id);
    let filterByComplete = [];

    if (completed === "true") {
      filterByComplete = personChores.filter(chore => chore.completed == true);
    } else if (completed === "false") {
      filterByComplete = personChores.filter(chore => chore.completed == false);
    } else if (completed === "all") {
      filterByComplete = personChores.map(chore => chore);
    } else return filterByComplete;

    personChores.length > 0
      ? res.status(200).json(filterByComplete)
      : res.status(200).json({});
  } else {
    res.status(400).json({ message: "A person with that ID does not exist." });
  }
});

router.post("/", (req, res) => {
  const assignedTo = req.body.assignedTo;
  const chore = req.body;
  if (assignedTo && chore.description) {
    chore.choreId = choreId + 1;
    chore.assignedTo = Number(assignedTo);
    choreId += 1;
    chores.push(chore);
    res.status(200).json(chores);
  } else {
    res
      .status(400)
      .json({ message: "Please provide a user ID and chore description." });
  }
});

router.put("/:id", (req, res) => {
  choresIndex = req.params.id - 1;
  chores[choresIndex] = req.body;
  res.status(200).json(chores);
});

router.delete("/:id", (req, res) => {
  chores = chores.filter(chore => chore.choreId != req.params.id);
  res.status(200).json(chores);
});

module.exports = router;
