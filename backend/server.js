require("dotenv").config();
const express = require("express");
const app = express();
const errorMiddleware = require("./middleWares/errorMiddleware");
// connect to authRoute
const route = require("./routes/authRoutes");

//connect to db
require("./db/conn");

// port number
const port = process.env.PORT;

// midleware
app.use(express.json());
app.use(errorMiddleware);

// routing
app.use("/api/auth", route);

//server is running at port 4000
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
