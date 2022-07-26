const { dataUser } = require('../dbContent/users/user.js')


const getUser = async (req, res) => {
    const userId = req.query.id
    const userResponse = dataUser.filter(user => user.id === Number(userId))
    res.status(200).send(userResponse[0])
}


const createUser = async (req, res) => {
    const newDataUsers = [...dataUser, req.body]
    res.send(newDataUsers)
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.body
        const isUser = checkIfUserExists(id)
        if (isUser) throw new Error('Usuário não localizado.')
        const user = updateUserInfo(req.body)
        const oldUsers = dataUser.filter(item => item.id !== id)
        const newUsers = [...oldUsers, user]
        res.status(200).json(newUsers)
    }
    catch (error) {
        res.status(404).json(error)
    }
}


const updateUserInfo = ({ id, name, birthDate }) => {
    return dataUser.reduce((acc, currentUser) => {
        const checkedUser = currentUser.id === id
        if (checkedUser) {
            acc = { ...acc, ...{ id, name, birthDate } }
        }
        return acc
    }, {});
}


const checkIfUserExists = (id) => {
    const user = dataUser.filter(item => item.id === id)
    return !user.length > 0
}


const deleteUser = async (req, res) => {
    try {
        const { id }  = req.body
        const isUser = checkIfUserExists(id)
        if(isUser) throw new Error('Usuario não localizado')
        const newUsers = dataUser.filter(user => user.id !== id)
        res.status(201).json(newUsers)
    }
    catch(error){
        res.status(404).json(error)
    }
    
}


module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}