const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello From this NODEJS APP!!!</h1>
    <p>This is new tag</p>
    <p>Try sending request to /error and check what happens</p>
    `);
});

app.get("/error", (req, res) => {
  process.exit(1);
});

app.listen(8080, () => {
  console.log("Listening");
});
