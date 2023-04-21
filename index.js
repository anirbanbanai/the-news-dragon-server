const express = require('express');
const app = express();
const cors = require('cors')
const port =process.env.port || 5000;

const catta = require('./data/catagories.json')

app.use(cors())

app.get('/', (req,res)=>{
    res.send('Dragon is Running')
})

app.get('/cata',(req, res)=>{
    res.send(catta)
})

app.listen(port, ()=>{
    console.log(`running ${port}`)
})