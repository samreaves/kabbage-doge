/**
 * Kabbage Doge Server
 * Temperature Endpoint
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

const Boom = require('boom');
const Joi = require('joi');
const axios = require('axios');

/* Normally would store this in an environment variable */
const weatherAPIKey = '89fb5209a0aa3c4148a391b1894a4f89';

/**
 * Temperature Route
 * Verb: POST
 * Route: /temperature
 * Expected Payload: String zipcode
 * Behavior: Calls openweathermap.org for current temperature of user specified ZIP Code
 */
const temperatureRoute = {
  method: 'POST',
  path: '/temperature',
  handler: (request, reply) => {

    /* Cache payload */
    const zipcode = request.payload.zipcode;

      /* Continue request here */
      axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appId=89fb5209a0aa3c4148a391b1894a4f89`)
        .then((response) => {

          /* If response comes back as expected, round the float and pass to user as current temperature */
          if (response.status === 200 && response.data && response.data.hasOwnProperty('main') && response.data.main.hasOwnProperty('temp') && typeof (response.data.main.temp === 'number')) {
              reply({temperature: Math.round(response.data.main.temp)});
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
            payload: {
                zipcode: Joi.string().length(5)
            }
        }
    }
};

module.exports = temperatureRoute;
