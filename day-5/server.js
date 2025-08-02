const express = require("express");
const app = express();
const connectedDb = require('./src/db/db')


connectedDb()
app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.listen(3000, () => {
  console.log("port run in 3000 ");
});
