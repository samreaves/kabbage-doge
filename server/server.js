/**
 * Kabbage Doge Server
 * Server Initialization File
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

const Hapi = require('hapi');
const server = new Hapi.Server();

/* Set up interface with HTTP */
server.connection({
  host: 'localhost',
  port: 3000
});

/* Allowing connection to public assets */
server.register({
  register: require('inert')
},
  (inertDependencyInjectionError) => {
  if (inertDependencyInjectionError) {
    throw inertDependencyInjectionError;
  }

  /* Server presentation layer public assets from client folder */
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '../client/dist',
        index: ['index.html']
      }
    }
  });
});

/* Start server */
server.start((serverStartError) => {
  if (serverStartError) {
    throw serverStartError;
  }

  console.log(`server started at: ${server.info.uri}`);
});
