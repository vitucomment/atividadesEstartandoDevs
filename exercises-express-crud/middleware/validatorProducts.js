const joi = require('joi')


const tshirtSizeQuerySchema = joi.object({
    size: joi.string().required()
})

const tshirtDefaultBodySchema = joi.object({
    id: joi.number().required(),
    size: joi.string().required(),
    description: joi.string().required()
})

const tshirtIdQuerySchema = joi.object({
    id: joi.number().required()
})

module.exports = {
    tshirtSizeQuerySchema,
    tshirtDefaultBodySchema,
    tshirtIdQuerySchema
}