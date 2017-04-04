'use strict';
var mongoose = require('mongoose');
require('./chapter');

module.exports = {
    Chapter:  mongoose.model('Chapter')
}