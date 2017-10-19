/**
 * Kabbage Doge Server
 * Breeds Endpoints
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

const Boom = require('boom');
const Joi = require('joi');
const axios = require('axios');

/**
 * Breeds Route
 * Verb: GET
 * Route: /breeds
 * Behavior: Calls and returns Array<String> breed names
 */
const breedsRoutes = [{
  method: 'GET',
  path: '/breeds',
  handler: (request, reply) => {

      /* Continue request here */
      axios.get('https://dog.ceo/api/breeds/list/all')
        .then((response) => {

          /* If response comes back as expected, round the float and pass to user as current temperature */
          if (response.status === 200 && response.data && response.data.message && Object.keys(response.data.message).length) {
              reply({ breeds: Object.keys(response.data.message) });
          }
          /* If our response did not come back as expected, throw 500 and point the finger */
          else {
            reply(Boom.badImplementation('Downstream server failing'));
          }
        })
        .catch(function (error) {
          console.log(error);
          reply(Boom.badImplementation('Downstream server failing'));
        });
    }
},

/**
 * Breeds Images Route
 * Verb: GET
 * Route: /breeds/{breedName}
 * Behavior: Calls and returns Array<String> breed image URLs
 */
{
  method: 'GET',
  path: '/breeds/{breedName}',
  handler: (request, reply) => {

    /* Cache payload */
    const breedName = request.params.breedName;

      /* Continue request here */
      axios.get(`https://dog.ceo/api/breed/${breedName}/images`)
        .then((response) => {

          /* Response was successful */
          if (response.status === 200 && response.data) {

            /* Did any images come back? If so, reply with them */
            if (Array.isArray(response.data.message) && response.data.message.length > 0 && typeof (response.data.message[0] === 'string')) {
              reply({ breedImages: response.data.message });
            }
            /* If not, throw faux 404 (200 with not found error) and relay error message */
            else if (response.data.status && response.data.status === 'error' && response.data.code && response.data.code === '404' && response.data.message) {
              reply(response.data);
            }
            /* Something didn't come back as expected */
            else {
              reply(Boom.badImplementation('Downstream server failing'));
            }
          }
          /* If our response did not come back as expected, throw 500 and point the finger */
          else {
            reply(Boom.badImplementation('Downstream server failing'));
          }
        })
        .catch(function (error) {
          console.log(error);
          reply(Boom.badImplementation('Downstream server failing'));
        });

    },
    /* Validate that payload is sent via JSON payload, it is a string, and it is 5 digits long
     * Chose String type because validator has .length functionality, whereas Number does not. */
    config: {
        validate: {
            params: {
                breedName: Joi.string().min(1).max(22)
            }
        }
    }
}];

module.exports = breedsRoutes;
