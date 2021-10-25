const fs = require ("fs");
const app = require("express").Router();
const {v1:uuidv1} = require("uuid");

app.get("/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json","utf-8"))
    res.json(data)
});

app.post("/notes", (req, res) => {
  const addNotes = req.body
  addNotes.id = uuidv1()
  let data = JSON.parse(fs.readFileSync("./db/db.json","utf-8"))
  data.push(addNotes)
  fs.writeFileSync("./db/db.json",JSON.stringify(data))
  res.json(data)
});
module.exports = app