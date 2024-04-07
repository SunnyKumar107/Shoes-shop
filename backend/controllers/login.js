const loginRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

loginRouter.post('/', async (request, response, next) => {
  const { email, password } = request.body
  try {
    const user = await User.findOne({ email })
    const correctPassword = !user
      ? false
      : await bcrypt.compare(password, user.passwordHash)

    if (!(user && correctPassword)) {
      return response.status(400).json({ error: 'Invalid email or password' })
    }

    const userForToken = {
      email: user.email,
      id: user._id
    }

    const token = jwt.sign(userForToken, process.env.SECRET_KEY, {
      expiresIn: 60 * 60
    })

    response.status(200).json({
      email: user.email,
      name: user.name,
      token
    })
  } catch (error) {
    next(error)
  }
})

module.exports = loginRouter
