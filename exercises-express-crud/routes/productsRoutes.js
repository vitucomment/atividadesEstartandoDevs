const express = require('express')
const router = express.Router()
const { createValidator } = require('express-joi-validation')
const validator = createValidator()
const { tshirtSizeQuerySchema, tshirtDefaultBodySchema, tshirtIdQuerySchema } = require('../middleware/validator.js')
const controller = require('../controllers/productsController.js')


router.get('/tshirt', validator.query(tshirtSizeQuerySchema), controller.getProductsBySize)
router.post('/tshirt', validator.body(tshirtDefaultBodySchema), controller.createTshirt)
router.put('/tshirt', validator.body(tshirtDefaultBodySchema), controller.updateTshirt)
router.delete('/tshirt', validator.query(tshirtIdQuerySchema), controller.deleteTshirt)

module.exports = router