/**
 * All authentication and authorization related function will be here.
 * 
 * For example the validation function for the hapi-auth-jwt2 plugin.
 */

'use strict';


/**
 * Taken from https://github.com/dwyl/hapi-auth-jwt2 .
 * 
 * @param {Object} decoded is the decoded and verified JWT received in the request
 * @param {Object} request is the original request received from the client
 * @param {function} callback function with the signature function(err, isValid, credentials)
 */
const validateJWT = (decoded, request, callback) => {
    // You can do some additional proofs here.
    // For example if you have a blacklist to invalidate you JWTs you 
    callback(null, true);
}

module.exports = {
    validateJWT
}
