var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");
var modelMain = require("../models/modelMain");


/*
 * GET home page.
 */
router.get('/', ctrlMain.index);
/*
 * Post findU page.
 */
router.post('/findU', modelMain.post_findU);

router.get('/geomap', ctrlMain.geomap);

router.get('/stanford', ctrlMain.stanford);

router.get('/harvard', ctrlMain.harvard);

router.get('/yale', ctrlMain.yale);

router.get('/comparison', ctrlMain.comparison);

router.get('/ranking', ctrlMain.ranking);

module.exports = router;