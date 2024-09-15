const express = require("express");
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

app.get("/", (req, res) => {
  res.send("Home page");
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});