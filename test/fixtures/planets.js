'use strict';

const id = require('pow-mongodb-fixtures').createObjectId;


/**
 * you can export an array or an object here.
 * I ususally go with objects, as they are easier to ise in your tests later.
 */
const planets = module.exports = {
    planetToGet : { //Meaningfull name
        _id: id('000000000000000000000001'), //If you need to know the id of a document, you can set it like this
        name: "Alpha",
        stargateAddress: "ABC123DEF",
        discoveryDate: new Date(),
        inhabited: false
    },
    planetForDuplicateKey : { //Meaningfull name
        _id: id('000000000000000000000002'), //If you need to know the id of a document, you can set it like this
        name: "Beta",
        stargateAddress: "123ABC456",
        discoveryDate: new Date(),
        inhabited: false
    }  
}
