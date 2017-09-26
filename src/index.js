/**
 * This is the starting point of the server.
 * 
 * First the database connection is established. After That the server will be started.
 */

'use strict';

const db = require('./db');
const server = require('./server');

db.connect()
    .then(() => server.start())
    .then(() => console.log("Server running at: " + server.info.uri))
    .catch((err) => console.log("Error while starting server!", err));