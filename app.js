import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("INDEX SAYFASI 2");
});

app.listen(port, () => {
  console.log(`Applicaiton running on port :${port}`);
});
