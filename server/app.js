const express = require ('express')
const router = require ('./routes')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api', router)

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Server message";
    res.status(status).send(message)
})

module.exports =app