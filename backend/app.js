const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const productRouter = require("./controllers/products");
const middleware = require("./utils/middleware");
const config = require("./utils/config");
const { info, error } = require("./utils/logger");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

const mongoUrl = config.MONGODB_URI;
mongoose
  .connect(mongoUrl)
  .then(() => {
    info("Connected to MongoDB");
  })
  .catch((err) => error(`Error connect to MongoDb: ${err.message}`));

app.use("/api/products", productRouter);

app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);

module.exports = app;
