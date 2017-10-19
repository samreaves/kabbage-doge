/**
 * Kabbage Doge Server
 * Server Router
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

const temperatureRoute = require('./temperature');
const breedsRoutes = require('./breeds');

const Routes = [temperatureRoute, ...breedsRoutes];

module.exports = Routes;
