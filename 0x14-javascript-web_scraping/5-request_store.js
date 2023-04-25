#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get({ url: url, encoding: 'utf-8' }, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(filePath, body, 'utf-8', function (err, data) {
      if (err) {
        console.error(err);
      }
    });
  }
});
