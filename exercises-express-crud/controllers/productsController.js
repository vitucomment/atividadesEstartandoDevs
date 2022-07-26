const { dataTshirt } = require('../dbContent/products/tshirts.js')

const getProductsBySize = async (req, res) => {
    const size = req.query.size.toUpperCase()
    const tshirtBySize = []
    dataTshirt.forEach((tshirt) => {
        if (tshirt.size === size) tshirtBySize.push(tshirt)
    })
    res.send(tshirtBySize)
}

const createTshirt = async (req, res) => {
    const newTshirtsCollection = [...dataTshirt, req.body]
    res.status(201).send(newTshirtsCollection)
}

const updateTshirt = async (req, res) => {
    try {
        const { id } = req.body
        const tshirtExist = checkIfTshirtOnData(id)
        if (tshirtExist) throw new Error("Produto não encontrado")
        const tshirt = updateTshirtInfo(req.body)
        const oldTshirts = dataTshirt.filter(tshirt => tshirt.id !== id)
        const newTshirts = [...oldTshirts, tshirt]
        res.status(201).json(newTshirts)
    }
    catch (error) {
        res.status(404).json(error)
    }
}

const updateTshirtInfo = ({ id, size, description }) => {
    return dataTshirt.reduce((acc, currentTshirt) => {
        const checkedTshirt = currentTshirt.id === id
        if (checkedTshirt) {
            acc = { ...acc, ...{ id, size, description } }
        }
        return acc
    }, {});
}

const checkIfTshirtOnData = (id) => {
    const tshirt = dataTshirt.filter(item => item.id === id)
    return !tshirt.length > 0
}


const deleteTshirt = async(req, res) =>{
    try{
        const {id} = req.body
        const tshirt = checkIfTshirtOnData(id)
        if(tshirt) throw new Error('Produto não encontrado')
        const newTshirts = dataTshirt.filter(item => item.id !== id)
        res.status(200).json(newTshirts)
    }
    catch(error){
        res.status(400).json(error)
    }
}

module.exports = {
    getProductsBySize,
    createTshirt,
    updateTshirt,
    deleteTshirt
}

