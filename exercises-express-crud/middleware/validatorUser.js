/* Validator valida a requisição que estamos recebendo, verificando se ela 
contém os parametros necessários para que ocorra o GET, PUT, POST ou DELETE, como
o ID do usuário que queremos DELETAR etc */

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



module.exports = {
    userQuerySchema,
    userBodySchema,
    userDefaultBodySchema
}