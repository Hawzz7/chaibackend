require('dotenv').config()
const express = require('express')
const serverless = require('serverless-http');
const router = express.Router();

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("narendradotcom")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login at chai or code</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai or code</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);