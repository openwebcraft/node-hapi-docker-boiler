'use strict';

const replyToPayload = (reply) => {
    return JSON.parse(reply.payload);
}


/**
 * As there are _id and eventually Date Objects in the fixture Obj
 * this function makes it a plain JSON to be able to compare it with
 * expect(..).to.equal(..)
 */
const fixtureToPlainJSON = (fixtureObj) => JSON.parse(JSON.stringify(fixtureObj))

module.exports = {
    replyToPayload,
    fixtureToPlainJSON
}