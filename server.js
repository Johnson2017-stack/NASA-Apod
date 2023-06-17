const express = require('express');


const server = express();

server.use('/public', express.static('public'));

const url = 'https://api.nasa.gov/planetary/apod?api_key=VLXRS1OhKA4gEpO1t9tPPU5cWWLU7ps8ousjyZiG'

server.set('views', './src/views');
server.set('view engine', 'ejs')

server.get('/nasa', (req, res) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        res.render("nasa", {nasaData: data})
    })
})


const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})