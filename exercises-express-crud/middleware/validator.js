const joi = require('joi')



const userQuerySchema = joi.object({
    id: joi.string().required()
})

const userBodySchema = joi.object({
    id: joi.number().required()
})

const userDefaultBodySchema = joi.object({
    id: joi.number().required(),
    name: joi.string().required(),
    birthDate: joi.string().required()
})




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
    userQuerySchema,
    userBodySchema,
    userDefaultBodySchema,
    tshirtSizeQuerySchema,
    tshirtDefaultBodySchema,
    tshirtIdQuerySchema}