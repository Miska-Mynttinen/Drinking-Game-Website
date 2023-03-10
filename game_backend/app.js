const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')

const questionsRouter = require('./controllers/questions')
const redirectRouter = require('./controllers/redirect')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build')) //takes frontend from build
app.use(express.json())
app.use(middleware.requestLogger)

// questions database HTTP requests
app.use('/api/questions', questionsRouter)

// redirects user back to menu page if refreshing
app.use('/', redirectRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app