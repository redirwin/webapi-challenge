const express = require("express");

const router = express.Router();

let peopleId = 2;

let people = [
  { id: 1, name: "Robert Jordan" },
  { id: 2, name: "Rand al'Thor" }
];

let chores = [
  {
    assignedTo: 1,
    choreId: 1,
    description: "Seed description",
    notes: "optional notes",
    completed: false
  },
  {
    assignedTo: 1,
    choreId: 2,
    description: "Seed description 2",
    notes: "optional notes 2",
    completed: true
  }
];

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const completed = req.query.completed;
  req.query.completed
    ? (completed = req.query.completed)
    : console.log("no param");
  if (people[id - 1]) {
    let personChores = chores.filter(chore => chore.assignedTo == id);

    if(completed)

    let filterByComplete = personChores.map(chore => chore);

    if (!completed) {
      filterByComplete = personChores.map(chore => chore);
      return;
    } else if (completed === "true") {
      filterByComplete = personChores.filter(chore => chore.completed == true);
    } else if (completed === "false") {
      filterByComplete = personChores.filter(chore => chore.completed == false);
    } else return filterByComplete;

    personChores.length > 0
      ? res.status(200).json(filterByComplete)
      : res.status(200).json({});
  } else {
    res.status(400).json({ message: "A person with that ID does not exist." });
  }
});

// router.get("/:id/chores", (req, res) => {
//   req.body.user_id = req.params.id - 1;
//   if (people[id]) {
//     console.log("Good ID!");
//     res.status(200).json({});
//   } else {
//     console.log("Bad ID!");
//     res.status(400).json({ message: "A person with that ID does not exist." });
//   }
// });

// router.post("/:id/chores", (req, res) => {
//   const id = req.params.id;
//   if (id) {
//     console.log("ID provided!");
//     res.status(200).json({});
//   } else  {
//     console.log("No ID provided!");
//     res.status(400).json({ message: "Please provide an ID." });
//   }
// });

router.get("/", (req, res) => {});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;
