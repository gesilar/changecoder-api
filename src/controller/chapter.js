var chapterDao = require('../dao').chapter;

var mongoose = require('mongoose');
var articleId =  mongoose.Types.ObjectId('58d3f3b80953ee272453f783'); 

function getAllChapters(req, res) {
    chapterDao.findChapterList(articleId).then(function(results){
        res.end(JSON.stringify(results));
    }, function(error) {
        res.end(error);
    });
}

function getChapterById(req, res) {
    var chapterId = mongoose.Types.ObjectId(req.params.id);
    chapterDao.findChapterDetail(chapterId).then(function(result){
        res.end(JSON.stringify(result));
    }, function(err){
        res.end(err);
    });
}

module.exports = {
    getAllChapters: getAllChapters,
    getChapterById: getChapterById
}