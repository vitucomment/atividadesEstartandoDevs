const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes.js')
const productRouter = require('./routes/productsRoutes.js')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', userRouter)
app.use('/api/products', productRouter)

app.listen(PORT, () =>{
    console.log(`Server on: http://localhost/${PORT}`)
})