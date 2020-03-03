const path = require("path");
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const router = require("./routes/transaction");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const app = express();

connectDB();

app.use(express.json());
if (process.env.SERVER_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transaction", router);

if (process.env.SERVER_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is now  ${process.env.SERVER_ENV} on mode ${PORT}`.yellow.bold
  )
);
