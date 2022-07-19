const express = require("express");
const app = express();
const dozieRoutes = require("./routes/dozieRoutes.js");

require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());

//setup routes
app.use("/v1/dozie", dozieRoutes);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});