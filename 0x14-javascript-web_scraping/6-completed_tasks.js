#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const completedTasks = {};

    JSON.parse(body).forEach(function (task) {
      if (task.completed === true) {
        if (task.userId in completedTasks) {
          completedTasks[task.userId] += 1;
        } else {
          completedTasks[task.userId] = 1;
        }
      }
    });

    console.log(completedTasks);
  }
});
