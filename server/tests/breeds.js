/**
 * Kabbage Doge Server
 * Breeds Endpoints Tests
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

const server = require('../server');
import test from 'ava';


test('Breeds endpoint | responds 200 | content-type: application/json | payload: Array<String> of dog breeds', t => {
  const request = {
    method: 'GET',
    url: '/breeds'
  };

  return server.inject(request)
    .then(response => {

      /* Destringify payload */
      const payload = JSON.parse(response.payload);

      /* Assertions */
      t.is(response.statusCode, 200, 'replies with 200 status');
      t.is(response.headers['content-type'], 'application/json; charset=utf-8', 'replies with application/json content-type');
      t.true(
          payload.hasOwnProperty('breeds') &&
          Array.isArray(payload.breeds) &&
          payload.breeds.every((breed) => typeof (breed === 'string'))
      );
    });
});

test('Breeds endpoint | when passed String breedName as URL parameter | responds 200 | content-type: application/json | payload: Array<URL> of image URLs of specified breed', t => {
  const request = {
    method: 'GET',
    url: '/breeds/beagle'
  };

  return server.inject(request)
    .then(response => {

      /* Destringify payload */
      const payload = response.payload && JSON.parse(response.payload);

      /* Assertions */
      t.is(response.statusCode, 200, 'replies with 200 status');
      t.is(response.headers['content-type'], 'application/json; charset=utf-8', 'replies with application/json content-type');
      t.true(
        payload.hasOwnProperty('breedImages') &&
        Array.isArray(payload.breedImages) &&
        payload.breedImages.every((breed) => typeof (breed === 'string') && breed.indexOf('http' > -1)));
    });
});

test('Breeds endpoint | when passed bogus String breedName as URL parameter | responds 404 | content-type: application/json | payload: Array<URL> of image URLs of specified breed', t => {
  const request = {
    method: 'GET',
    url: '/breeds/beAGWA'
  };

  return server.inject(request)
    .then(response => {

      /* Destringify payload */
      const payload = response.payload && JSON.parse(response.payload);

      /* Assertions */
      t.is(response.statusCode, 200, 'replies with 200 status');
      t.is(response.headers['content-type'], 'application/json; charset=utf-8', 'replies with application/json content-type');
      t.true(payload.status === 'error' && payload.code === '404' && payload.message === 'Breed not found');
    });
});
