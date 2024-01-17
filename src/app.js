const express = require("express");
const morgan = require("morgan");

const app = express();

const sayHello = (req, res, next) => {
  res.send("Hello");
};

app.use(morgan("dev"));

app.get("/hello", sayHello);

app.get("/hello/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

module.exports = app;
