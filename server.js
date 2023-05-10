const express = require("express");
const app = express();
const port = 3000;

app.get("/california", (req, res) => {
  res.send("California");
});

app.get("/texas", (req, res) => {
  res.send("Texas");
});

app.get("/florida", (req, res) => {
  res.send("Florida");
});

app.get("/new-york", (req, res) => {
  res.send("New York");
});

app.get("/illinois", (req, res) => {
  res.send("Illinois");
});

app.get("/pennsylvania", (req, res) => {
  res.send("Pennsylvania");
});

app.get("/ohio", (req, res) => {
  res.send("Ohio");
});

app.get("/georgia", (req, res) => {
  res.send("Georgia");
});

app.get("/north-carolina", (req, res) => {
  res.send("North Carolina");
});

app.get("/michigan", (req, res) => {
  res.send("Michigan");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
