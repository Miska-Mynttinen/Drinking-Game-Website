const redirectRouter = require('express').Router()
require('dotenv').config()

redirectRouter.get('/players', async (request, response) => {
  response.redirect('/')
})


redirectRouter.get('/play', async (request, response) => {
  response.redirect('/')
})

module.exports = redirectRouter