const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {res.sendFile(path.join(__dirname, '/index.html'))})
app.get('/css', (req,res) => {res.sendFile(path.join(__dirname, '/index.css'))})
app.get('/js', (req,res) => {res.sendFile(path.join(__dirname, '/index.js'))})

app.get('/secondhtml', (req,res) => {res.sendFile(path.join(__dirname, '/second.html'))})

app.get('/secondcss', (req,res) => {res.sendFile(path.join(__dirname, '/second.css'))})

app.get('/secondjs', (req,res) => {res.sendFile(path.join(__dirname, '/second.js'))})
app.listen(4000, ()=> {console.log('Listening on port 4000')})