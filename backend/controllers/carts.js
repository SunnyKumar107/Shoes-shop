const cartsRouter = require("express").Router();
const cartsData = [];

cartsRouter.post("/", async (request, response, next) => {
  try {
    const newEntry = request.body;

    const newProduct = {
      ...newEntry,
    };
    await cartsData.push(newProduct);
    response.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});

cartsRouter.get("/", (request, response, next) => {
  try {
    response.status(200).json(cartsData);
  } catch (error) {
    next(error);
  }
});

cartsRouter.delete("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    await cartsData.filter((p) => p.id !== id);
    response.status(202).end();
  } catch (error) {
    next(error);
  }
});

module.exports = cartsRouter;
