(function() {
  'use strict';
  const express = require('express');
  const app = express();
  
  app.get('/employees', function (req, res) {
    res.send('Hello World');
  });

  module.exports = app;
})(); 
