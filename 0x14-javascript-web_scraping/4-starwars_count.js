#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const movies = JSON.parse(body).results;
  const characterId = '18';
  let count = 0;

  for (const movie of movies) {
    const characters = movie.characters;

    if (characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
      count++;
    }
  }

  console.log(count);
});
