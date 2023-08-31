require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes");
const app = express();

const PORT = process.env.PORT || 3200;
app.use(express.json());
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong....";
  res.status(500).json({ data: "", msg: err });
});

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
