import express from "express";
const router = express.Router();

let fakeDB = [
  {
    id: 1,
    fName: "shikamaru",
    lName: "Nara",
  },
  {
    id: 2,
    fName: "Kakashi",
    lName: "hatake",
  },
  {
    id: 3,
    fName: "itachi",
    lName: "Uchiha",
  },
];

router.get("/", (req, res) => {
  try {
    // throw new Error("my custom error");
    // console.log(req.query);
    // fakeDB.push(req.query);
    res.json({
      message: "hello world",
      users: fakeDB,
    });
  } catch (error) {
    status: error, // sucess
      res.status(500).json({
        message: "Error" + error.message,
      });
    console.log(error.message);
  }
});
router.post("/", (req, res) => {
  console.log(req.body);
  fakeDB.push(req.body);
  res.json({
    message: "new user has been  added",
  });
});
router.put("/", (req, res) => {
  console.log(req.body, req.headers.authorization, "from put");

  res.json({
    message: "todo put method world",
  });
});
router.delete("/:id", (req, res) => {
  console.log(req.params, "from delete");
  res.json({
    message: " todo delete method",
  });
});

export default router;
