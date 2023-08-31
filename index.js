require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3200;

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong....";
  res.status(500).json({ data: "", msg: err });
});
app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
