const express = require('express')
const router = express.Router()
const menuController = require ('../controllers/menu')

// Middleware
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

// Add Controllers
router.get('/', menuController.getIndex)
router.get('/:id', menuController.editMenu)
router.get('/delete/:id', menuController.deleteMenu)
router.post('/delete/:id', menuController.deleteMenu)
router.post('/save', menuController.saveMenu)
router.post('/new', menuController.newMenu)




module.exports = router