'use strict';
const jwt = require('jsonwebtoken');
const config = require("../../config");

/**
 * Generates a JWT from the users _id and isAdmin (can be loggedInAs) 
 * @param {Object} user the user object with at least _id, isAdmin and a serviceData array
 * @param {Number} secondsToExpire seconds to expire
 * @returns {String} the generated token
 */
const generateJWT = (user, secondsToExpire = 60, invalid = false) => {

    //Gets the secret automatically from the config.
    let secret = config.auth.jwtSecret;
    if (invalid) secret = secret + "abc";

    //Actually just setting the id of the user as the issuer and the expire time.
    var tokenContent = {
        iss: user._id,
        exp: Date.now() / 1000 + secondsToExpire
    }

    //If you have an admin state coded in your token you could add this here
    //if (user.isAdmin) tokenContent.isAdmin = true;

    return jwt.sign(tokenContent, secret);
}

module.exports.generateJWT = generateJWT;
