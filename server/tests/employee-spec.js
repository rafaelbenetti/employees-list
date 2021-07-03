(function() {
  'use strict';

  const request = require('supertest');
  const app = require('../config/express');
  const COLLECTION = '/employees';

  describe('Test API', function() {
    it('Expect API to be running ', function(done) {
      request(app)
        .get(COLLECTION)
        .expect('Hello World', done);
    });
  });
})();
