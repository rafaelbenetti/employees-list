(function() {
  'use strict';

  const http = require('http');
  const host = require('./config/host-config');
  const app = require('./config/express'); 

  http.createServer(app).listen(host.port, () => { 
    console.log(`Node server on port: ${host.port}`); 
  });
})();
