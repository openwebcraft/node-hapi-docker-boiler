/**
 * This is the starting point of the server.
 * 
 */


'use strict';

const Hapi = require('hapi');

const filePath = require('path');

const _ = require('lodash')

const auth = require('./auth');
const config = require('../config');
const controllers = require('require-all')(__dirname + "/controllers");


//Create a server with host, port and cors
const server = module.exports = new Hapi.Server();

//Basic Server settings for connection
server.connection({
    host: config.server.host,
    port: config.server.port,
    routes: {
        cors: {
            origin: config.server.origin
        }
    },
    files: {
        relativeTo: filePath.join(__dirname)
    }
});

server.register([require('hapi-auth-jwt2')])
    .then(()=>{

        //Setting up the authentication stategie
        server.auth.strategy("jwt", "jwt", {
            key: config.auth.jwtSecret, //JWT Secret from the config
            validateFunc: auth.validateJWT,
            verifyOptions: { algorithms: ["HS256"] }    
        });

        //making 'jwt' the default strategie
        server.auth.default("jwt");

        /**
         * Add routes to the server.
         * Map and flatten is needed to convert the controllers object to an flat array.
         * 
         * See ./controller/planets.js for how to structure a controller
         */
        server.route(_.flatten(_.map(controllers, (o)=>o)));



});


module.exports = server;








