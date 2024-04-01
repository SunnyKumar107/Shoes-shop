const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const productRouter = require("./controllers/products");
const middleware = require("./utils/middleware");

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/api/products", productRouter);

app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);

module.exports = app;
