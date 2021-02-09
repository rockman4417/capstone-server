const express = require('express')
const router = express.Router()

const templatesController = require('../controllers/templates.js')
// Create, Read, Update, Delete 311-2 CRUD

router.post('/templates', templatesController.createTemplate)
router.get('/templates', templatesController.listTemplates)
// get one user
// put(update) user
// post(delete) user

module.exports = router


// 311-4 Routes and Controllers