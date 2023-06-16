const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser')

const server = express();

const url = 'https://api.nasa.gov/planetary/apod?api_key=VLXRS1OhKA4gEpO1t9tPPU5cWWLU7ps8ousjyZiG'

server.set('views', './src/views');
server.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})