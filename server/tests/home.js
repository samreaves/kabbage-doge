/**
 * Kabbage Doge Server
 * Home Endpoint Test
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

const server = require('../server');
import test from 'ava';


test('Home route responds 200 with content type of text/html', t => {
  const request = {
    method: 'GET',
    url: '/'
  };

  return server.inject(request)
    .then(response => {
      t.is(response.statusCode, 200, 'replies with 200 status');
      t.is(response.headers['content-type'], 'text/html; charset=utf-8', 'replies with text/html content-type');
    });
});
