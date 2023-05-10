const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.get("/temp1", (req, res) => {
  res.render("template1", {
    title: "Template 1",
    header: "Template 1",
    message: "This is a template. Wow. Amazing.",
  });
});

app.get("/temp2", (req, res) => {
  res.render("template2", {
    title: "Template 2",
    header: "Template 2",
    message: "This is another template. Nothing special here. Just a template.",
  });
});

app.get("/california", (req, res) => {
  res.send("<h1>California</h1>");
});

app.get("/texas", (req, res) => {
  res.send("<h1>Texas</h1>");
});

app.get("/florida", (req, res) => {
  res.send("<h1>Florida</h1>");
});

app.get("/new-york", (req, res) => {
  res.send("<h1>New York</h1>");
});

app.get("/illinois", (req, res) => {
  res.send("<h1>Illinois</h1>");
});

app.get("/pennsylvania", (req, res) => {
  res.send("<h1>Pennsylvania</h1>");
});

app.get("/ohio", (req, res) => {
  res.send("<h1>Ohio</h1>");
});

app.get("/georgia", (req, res) => {
  res.send("<h1>Georgia</h1>");
});

app.get("/north-carolina", (req, res) => {
  res.send("<h1>North Carolina</h1>");
});

app.get("/michigan", (req, res) => {
  res.send("<h1>Michigan</h1>");
});
app.listen(port, () => console.log(`Listening on port ${port}`));
