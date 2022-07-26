const express = require('express')
const router = express.Router()
const { createValidator } = require('express-joi-validation')
const validator = createValidator()
const { userQuerySchema, userDefaultBodySchema, userBodySchema} = require('../middleware/validator.js')
const controller = require('../controllers/userController.js')

router.get('/users', validator.query(userQuerySchema), controller.getUser)
router.post('/users', validator.body(userDefaultBodySchema), controller.createUser)
router.put('/users', validator.body(userDefaultBodySchema), controller.updateUser)
router.delete('/users', validator.body(userBodySchema), controller.deleteUser)

module.exports = router
