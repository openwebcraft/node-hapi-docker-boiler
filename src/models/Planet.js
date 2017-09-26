'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
    name: { type: String, required: true, index: true, unique: true},
    inhabited: {type: Boolean, default: false},
    stargateAddress: {type: String},
    discoveryDate: {type: Date, default: Date.now}
});

schema.statics.findByName = function(name){
    return this.findOne({name}).exec();
}

module.exports = mongoose.model('Planet', schema);