// *Handles initial GET request the homepage
// *Handles POST Method requestfor adding a new item


const express =require('express');
const router = express.Router();
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex); // read = get request
router.post('/new', homeController.createItem) // create

module.exports = router