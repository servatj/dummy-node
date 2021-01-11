   // importing express framework
    const express = require("express");
    const logger = require('./utils/logger');


    const app = express();

    // Respond with "hello world" for requests that hit our root "/"
    app.get("/", function (req, res) {
      try {
        throw new Error('db error');
      } catch (error) {
        logger.error('error root endpoint', error );
      }
      return res.send("Hello World");
    });

    module.exports = app;
