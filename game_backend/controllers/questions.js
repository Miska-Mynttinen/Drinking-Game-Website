const questionsRouter = require('express').Router()
require('dotenv').config()

const Question = require('../models/question')

questionsRouter.get('/', async (request, response) => {
  const questions = await Question.find({})
  response.json(questions)
})


questionsRouter.get('/:id', async (request, response) => {
  const question = await Question.findById(request.params.id)
  if (question) {
    response.json(question.toJSON())
  } else {
    response.status(404).end
  }
})


questionsRouter.post('/', async (request, response) => {
  const body = request.body

  const question = new Question({
    question: body.question,
    pack: body.pack,
    type: body.type,
    who: body.who,
    sips: body.sips
  })

  const savedQuestion = await question.save()
  response.status(201).json(savedQuestion)
})


questionsRouter.delete('/:id', async (request, response) => {
  await Question.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = questionsRouter