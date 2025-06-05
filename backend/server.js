const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/residents", userRoutes);
app.listen(3000, () => {
  connectDb();
  console.log("server is running ");
});
