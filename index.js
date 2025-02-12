const express = require('express')
const app = express()
const userRouter = require('./router/users')
const productRouter = require('./router/products')
const orderRouter = require('./router/orders')
const port = 3000
const connectDB = require('./config/database')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(userRouter)
app.use(productRouter)
app.use(orderRouter)

connectDB()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`)
})