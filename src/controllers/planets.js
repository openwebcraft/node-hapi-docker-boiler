/**
 * The controller script contains everything needed for an endpoint.
 * This means route settings, validation schemas and the handler functions are placed here.
 * 
 * If you need much logic to serve the endpoint it is a good idea to write it in another script in an extra subfolder of ../src. 
 * If only need some small functions, which are also only used for this endpoint, you can also integrate them in this file.
 */

'use strict';

const Joi = require('joi');
const Boom = require('boom');


/**
 * Joi Validation Schemas 
 * 
 * If you need schemes in more than one controller script you might want to bundle them in an own script
 */

//as soon as you need a key more than once it is a good idea to give it an own schema you can include in other schemes
const joiPlanetName = Joi.string().min(3).alphanum();



const joiGetPlanetsByNameParams = Joi.object().keys({ //Named like joi<handlerFunctionName><requestProperty> 
    name: joiPlanetName.required()
});

const joiPostPlanets = Joi.object().keys({
    name: joiPlanetName.required(),
    inhabited: Joi.boolean().optional(),
    stargateAddress: Joi.string().alphanum().min(7).max(9).optional(),
    discoveryDate: Joi.date().optional()
});


/**
 * Functions
 */



/**
 * Handler functions
 */

const getPlanetsByName = (request, reply) => { //I name the handlerfunctions by <method><Endpoint>[By<path>]

}

const postPlanets = (request, reply) => {

}

/**
 * Route configuration
 * 
 * Details: https://hapijs.com/api#route-configuration
 */

module.exports = [
    {
        method: "GET",
        path: "/planets/{planetName}",
        config: {
            validate: {
                params: joiGetPlanetsByNameParams
            },
            auth: false //As we set "JWT" as our default authentication we need to set the authentication to false, if not needed
        },
        handler: getPlanetsByName
    },
    {
        method: "POST",
        path: "/planets",
        config: {
            validate: {
                payload: joiPostPlanets
            },
            auth: "jwt" //For a better clarity I like to set the authentication, even if I use the default
        },
        handler: postPlanets
    }
]

