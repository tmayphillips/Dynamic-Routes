const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express')
const server = express()

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// var cors = require('cors')
// server.use(cors())

server.get('/books/:genre/year/:year', function(req,res) {
  let genre = req.params.genre
  let year = req.params.year
  res.send(`The book belongs to ${genre} and was released in ${year}`)
})
