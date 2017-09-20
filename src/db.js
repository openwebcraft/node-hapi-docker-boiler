'use strict';

var mongoose = require('mongoose');
var config = require('../../config');
var Promise = require('bluebird');

//Set bluebird as the promise library for mongoose
mongoose.Promise = require('bluebird');


/**
 * Function to connect to the  DB via mongoose.
 * @returns {Promise.Connection} Return the Mongoose Default Connection
 */
const connect = () => {
    return new Promise(function(resolve, reject) {

        if (mongoose.connection.readyState == 1) {
            return resolve(mongoose.connection);
        } else {
            mongoose.connection.on('connected', function() {

                return resolve(mongoose.connection);
            });

            // If the connection throws an error
            mongoose.connection.on('error', function(err) {

                return reject(err);
            });

            // When the connection is disconnected
            mongoose.connection.on('disconnected', function() {
                console.log('Mongoose default connection disconnected');
            });

            if (mongoose.connection.readyState != 2) mongoose.connect(config.mongo.uri, config.mongo.options);
        }
    });
}

exports.connect = connect;
