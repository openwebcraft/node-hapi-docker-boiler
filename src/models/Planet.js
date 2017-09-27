/**
 * The mongoose schema for the example entity "Planet".
 * 
 * The schema should contain everything related to the model.
 * This includes:
 *  - The schema itself
 *  - Static functions for the model like special finds or findAndUpdate functionality
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

/**
 * Schema
 */

var schema = new Schema({
    name: { type: String, required: true, index: true, unique: true},
    inhabited: {type: Boolean, default: false},
    stargateAddress: {type: String},
    discoveryDate: {type: Date, default: Date.now}
});

/**
 * functions
 */

schema.statics.findByName = function(name){
    return this.findOne({name}).exec();
}

module.exports = mongoose.model('Planet', schema);