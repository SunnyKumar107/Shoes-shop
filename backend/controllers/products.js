const productsRouter = require('express').Router()
const Products = require('../utils/productDB')

productsRouter.get('/', (request, response, next) => {
  try {
    response.status(200).json(Products)
  } catch (error) {
    next(error)
  }
})

productsRouter.get('/:id', (request, response, next) => {
  const id = request.params.id
  try {
    const product = Products.find((p) => p.id === id)
    response.status(200).json(product)
  } catch (error) {
    next(error)
  }
})

module.exports = productsRouter
