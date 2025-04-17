// How to create express server
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Starting the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running at port ${port}`);
});
// node index.js to run