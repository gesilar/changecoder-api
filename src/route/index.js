var express = require('express');
var router = express.Router();

var chapter = require('../controller').Chapter;

// chapter
router.get('/chapter/', chapter.getAllChapters);
router.get('/chapter/:id', chapter.getChapterById);


module.exports = router;