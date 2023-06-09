const express = require("express")
const promptController = require("../controllers/prompt-controller")

const routes = express.Router()

routes.post('/api/0.0.1/prompt', promptController.sendText)

module.exports = routes

// http://localhost:5001/api/0.0.1/prompt