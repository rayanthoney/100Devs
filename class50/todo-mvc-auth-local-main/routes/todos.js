const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', ensureAuth, todosController.getTodos) // Middleware ensureAuth is a function that checks to make sure you are logged in, If logged in (isAuthenticated) will continue, If not logged in will redirect to index.

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router