'use strict';
var Chapter = require('../models').Chapter;

function findBy(filter, fields) {
    var query = Chapter.find(filter);
    if (fields && fields.length > 0) {
        query.select(fields.join(' '));
    }
    return query.exec();
}

function findChapterDetail(id) {
    return Chapter.findById(id).exec();
}

function findChapterList(id) {
    return findBy({articleId: id}, ['name']);
}
module.exports = {
    findChapterList: findChapterList,
    findChapterDetail: findChapterDetail
}