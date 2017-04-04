'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var chapterSchema = new mongoose.Schema({
    name: String,
    content: String,
    articleId: ObjectId
});

mongoose.model('Chapter', chapterSchema);