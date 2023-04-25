#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];

request(`https://swapi-api.alx-tools.com/api/films/${movieId}`, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  }
});
