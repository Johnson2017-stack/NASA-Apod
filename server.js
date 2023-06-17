const express = require('express');


const server = express();

server.use('/public', express.static('public'));

const url = 'https://api.nasa.gov/planetary/apod?api_key=VLXRS1OhKA4gEpO1t9tPPU5cWWLU7ps8ousjyZiG'
const prevPicUrl = 'https://api.nasa.gov/planetary/apod?api_key=VLXRS1OhKA4gEpO1t9tPPU5cWWLU7ps8ousjyZiG&start_date=2023-06-09&end_date=2023-06-17'

server.set('views', './src/views');
server.set('view engine', 'ejs')
async:true;

server.get('/home', (req, res) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        res.render("home", {nasaData: data})
    })
})

server.get('/prev-pic', (req, res) => {
    fetch(prevPicUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        res.render("prev-pic", {nasaData: data})
    })
})


const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})