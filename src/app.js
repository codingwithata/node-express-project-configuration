const express = require("express");
const morgan = require("morgan");

const app = express();

const sayHello = (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};

const saySomething = (req, res) => {
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
};

app.use(morgan("dev"));

app.get("/hello", sayHello);

app.get("/say/:greeting", saySomething);

app.get("/songs", (req, res) => {
  const title = req.query.title;
  res.send(title);
});

app.use((req, res, next) => {
  res.send(`The route ${req.path} does not exist!`);
});
module.exports = app;
