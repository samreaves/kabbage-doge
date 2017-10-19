/**
 * Kabbage Doge Server
 * 404 Test
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

const server = require('../server');
import test from 'ava';


test('Non-existent route responds with 404', t => {
  const request = {
    method: 'GET',
    url: '/alhgashglhg'
  };

  return server.inject(request)
    .then(response => {
      t.is(response.statusCode, 404, 'replies with 404 status');
    });
});
