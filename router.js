const express = require("express");

const router = express.Router();

let choreId = 0;

console.log("Chore ID: ", choreId);

let people = [
  { id: 1, name: "Robert Jordan" },
  { id: 2, name: "Rand al'Thor" },
  { id: 3, name: "Mat Cauthon" },
  { id: 4, name: "Perrin Aybara" },
  { id: 5, name: "Egwene al'Vere" }
];

let chores = [];

router.get("/", (req, res) => {
  const completed = req.query.completed;

  !completed
    ? res.status(200).json(chores)
    : res
        .status(200)
        .json(
          chores.filter(chore => chore.completed === JSON.parse(completed))
        );
});

router.get("/", (req, res) => {
  const completed = req.query.completed;
  !completed
    ? res.status(200).json(chores)
    : res
        .status(200)
        .json(
          chores.filter(chore => chore.completed === JSON.parse(completed))
        );
});

router.post("/", (req, res) => {
  const assignedTo = req.body.assignedTo;
  const chore = req.body;
  if (assignedTo && chore.description) {
    chore.completed = chore.completed || false;
    chore.id = choreId + 1;
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
  const { assignedTo, description, notes, completed } = req.body;

  if (assignedTo && description) {
    chores.map(chore => {
      if (chore.id == req.params.id) {
        console.log("Completed: ", completed);
        if (assignedTo) chore.assignedTo = assignedTo;
        if (completed) chore.completed = JSON.parse(completed);
        if (description) chore.description = description;
        if (notes) chore.notes = notes;
      }
    });
    res.status(200).json(chores);
  } else {
    res
      .status(400)
      .json({ message: "Please provide an assignedTo and description." });
  }
});

router.delete("/:id", (req, res) => {
  chores = chores.filter(chore => chore.id != Number(req.params.id));
  res.status(200).json(chores);
});

module.exports = router;
