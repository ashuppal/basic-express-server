'use strict';

const express = require ('express');
const app = express ();
const port = process.env.PORT || 3001;
const errorHandler = require ('./error-handlers/500.js');
const logger = require ('./middleware/logger.js');
const notFound = require ('./error-handlers/404.js');


function start () {
  app.listen (port, () => {
    console.log (`Server listening on port ${port}`);
  });
}

app.get ('/', logger, (req, res, next) => {
  res.status (200).send ('Hello there ');
});

app.get ('/person', (req, res, next) => {
  if (!req.query.name) {
    next ('No name provided');
  }
  res.status (200).send (`Hello there : ${req.query.name}`);
});

app.use ('*', notFound);
app.use (errorHandler);
app.use (logger);

module.exports = {start, app};
