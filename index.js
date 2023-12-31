const express = require("express");

const server = express();

server.use(express.static("public"));

const url =
  "https://api.nasa.gov/planetary/apod?api_key=VLXRS1OhKA4gEpO1t9tPPU5cWWLU7ps8ousjyZiG";
const prevPicUrl =
  "https://api.nasa.gov/planetary/apod?api_key=VLXRS1OhKA4gEpO1t9tPPU5cWWLU7ps8ousjyZiG&start_date=2023-01-01&end_date=";

server.set("views", "./src/views");
server.set("view engine", "ejs");

server.get("/", (req, res) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      res.render("home", { nasaData: data });
    });
});

server.get("/prev-pic/:id", (req, res) => {
    const index = req.params.id;
    
    fetch(prevPicUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      //   function for infinite scroll

      // (function (data) {
      //   "use strict";
      //   function sleep(ms) {
      //     return new Promise((resolve) => setTimeout(resolve, ms));
      //   }

      //   async function main() {
      //     scrollTo(0, 30000000);
      //     var Maxscroll = scrollY;
      //     scrollTo(0, 0);
      //     var i = 0;
      //     while (i <= Maxscroll) {
      //       scrollBy(0, i);
      //       await sleep(1);
      //       scrollTo(0, 0);
      //       i = i + 5;
      //     }
      //     main();
      //   }
      //   main();
      // });
      // res.render("prev-pic", { nasaData: data });

      const five = 5;
      let prevPicArr = [];
      for ( let i = 0; i < data.length; i+= five) {
          prevPicArr.push(data.slice(i, i+five))
      }



      res.render("prev-pic", {nasaData: prevPicArr[index]})
      
    });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = server;