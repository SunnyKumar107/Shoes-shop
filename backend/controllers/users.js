const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

usersRouter.get('/', async (request, response, next) => {
  try {
    const users = await User.find({})
    response.status(200).json(users)
  } catch (error) {
    next(error)
  }
})

usersRouter.post('/', async (request, response, next) => {
  const { email, name, password } = request.body

  try {
    if (!email || !name || !password) {
      return response.status(400).json({ error: 'Please fill all fields' })
    }

    if (email.length < 6 || password.length < 6) {
      return response.status(400).json({
        error: 'Email or Password must be at least 6 characters long'
      })
    }

    const userExist = await User.findOne({ email })
    if (userExist) {
      return response.status(401).json({ error: 'Email already exists' })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const newUser = new User({
      email,
      name,
      passwordHash
    })

    const savedUser = await newUser.save()
    response.status(201).json(savedUser)
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter
