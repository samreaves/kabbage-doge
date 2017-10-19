/**
 * Kabbage Doge Server
 * Temperature Endpoint Test
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

const server = require('../server');
import test from 'ava';


test('Temperature endpoint | when passed String zipcode with 5 digits | responds 200 | content-type: application/json | payload of Number temperature', t => {
  const request = {
    method: 'POST',
    url: '/temperature',
    payload: {"zipcode": "30318"}
  };

  return server.inject(request)
    .then(response => {

      /* Destringify payload */
      const payload = JSON.parse(response.payload);

      /* Assertions */
      t.is(response.statusCode, 200, 'replies with 200 status');
      t.is(response.headers['content-type'], 'application/json; charset=utf-8', 'replies with application/json content-type');
      t.true(payload.hasOwnProperty('temperature') && (typeof payload.temperature === 'number'));
    });
});

test('Temperature endpoint | when passed String zipcode with 4 digits | responds 400 | content-type: application/json | error: zipcode fails because it must be 5 characters long', t => {
  const request = {
    method: 'POST',
    url: '/temperature',
    payload: {"zipcode": "3031"}
  };

  return server.inject(request)
    .then(response => {

      /* Destringify payload */
      const payload = response.payload && JSON.parse(response.payload);

      /* Assertions */
      t.is(response.statusCode, 400, 'replies with 400 status');
      t.is(response.headers['content-type'], 'application/json; charset=utf-8', 'replies with application/json content-type');
      t.true(payload.hasOwnProperty('error') && payload.hasOwnProperty('message') && payload.message === 'child "zipcode" fails because ["zipcode" length must be 5 characters long]');
    });
});
