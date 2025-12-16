import express from "express";

const app = express();
const PORT = 8000;
// console.log("hello world");
// console.log(app);

//make post data avaible in req.body
// app.use(express.json());

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

import userRouter from "./src/router/userRouter.js";

app.use("/api/v1/users", userRouter);
// app.get("/", (req, res) => {
//   // console.log(req.query);
//   // fakeDB.push(req.query);
//   res.json({
//     message: "hello world",
//     users: fakeDB,
//   });
// });
// app.post("/", (req, res) => {
//   console.log(req.body);
//   fakeDB.push(req.body);
//   res.json({
//     message: "new user has been  added",
//   });
// });
// app.put("/", (req, res) => {
//   console.log(req.body, req.headers.authorization, "from put");

//   res.json({
//     message: "todo put method world",
//   });
// });
// app.delete("/:id", (req, res) => {
//   console.log(req.params, "from delete");
//   res.json({
//     message: " todo delete method",
//   });
// });

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`this server is running in http://localhost:${PORT}`);
});
