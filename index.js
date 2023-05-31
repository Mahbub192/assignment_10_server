const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const chefData = require("./data/chefDataInfo.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefData.find((chef) => parseInt(chef.id) === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
