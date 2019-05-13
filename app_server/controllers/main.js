
/*
 * GET home page.
 */
module.exports.index = function(req, res, next) 
{
    var db = req.db;
    const async = require("async")

    const names = ['top10countries','top10field','studentChina','studentRegion','UniversityScore','worldRank']

    const collections = names.map(name => db.get(name))

    const functions = collections.map(collection => {
        return done => collection.find( {}, done )
    })

    async.series( functions, (err, results) => {
        // "results" is now an array containing [ docs1, docs2, .. ]
       
        res.render('index.jade', {
            top10countries: JSON.stringify(results[0]),
            top10field: JSON.stringify(results[1]),
            studentChina: JSON.stringify(results[2]),
            studentRegion: JSON.stringify(results[3]),
            universityScore: JSON.stringify(results[4]),
            worldRank: JSON.stringify(results[5])
        });
    })
};

/*
 * GET geomap page.
 */
module.exports.geomap = function(req, res) 
{
    var db = req.db;
    const async = require("async")

    const names = ['map']

    const collections = names.map(name => db.get(name))

    const functions = collections.map(collection => {
        return done => collection.find( {}, done )
    })

    async.series( functions, (err, results) => {
        res.render('geomap.jade', {
            map: JSON.stringify(results[0]),
        });
    })
};

module.exports.stanford = function(req, res) 
{
    var db = req.db;
    const async = require("async")

    const names = ['age_stanford','race_stanford', 'stanfordfinance', 'stanfordacademic']

    const collections = names.map(name => db.get(name))

    const functions = collections.map(collection => {
        return done => collection.find( {}, done )
    })

    async.series( functions, (err, results) => {
        res.render('stanford.jade', {
            age_stanford: JSON.stringify(results[0]),
            race_stanford: JSON.stringify(results[1]),
            stanfordfinance: JSON.stringify(results[2]),
            stanfordacademic: JSON.stringify(results[3])
        });
    })
};
module.exports.harvard = function(req, res) 
{
    var db = req.db;
    const async = require("async")

    const names = ['harvard_school','harvard_ethnity']

    const collections = names.map(name => db.get(name))

    const functions = collections.map(collection => {
        return done => collection.find( {}, done )
    })

    async.series( functions, (err, results) => {
        res.render('harvard.jade', {
            harvard_school: JSON.stringify(results[0]),
            harvard_ethnity: JSON.stringify(results[1])
        });
    })
};

module.exports.yale = function(req, res) 
{
    var db = req.db;
    const async = require("async")

    const names = ['yalerace','yaleage','yale_school']

    const collections = names.map(name => db.get(name))

    const functions = collections.map(collection => {
        return done => collection.find( {}, done )
    })

    async.series( functions, (err, results) => {
        console.log(results[2]);
        res.render('yale.jade', {
            yalerace: JSON.stringify(results[0]),
            yaleage: JSON.stringify(results[1]),
            yale_school: JSON.stringify(results[2])
        });
    })
};

module.exports.comparison = function(req, res) 
{
    var db = req.db;
    const async = require("async")

    const names = ['AcceptenceRate','UndergraduateTermBill']

    const collections = names.map(name => db.get(name))

    const functions = collections.map(collection => {
        return done => collection.find( {}, done )
    })

    async.series( functions, (err, results) => {
        // "results" is now an array containing [ docs1, docs2, .. ]
        res.render('comparison.jade', {
            AcceptenceRate: JSON.stringify(results[0]),
            UndergraduateTermBill: JSON.stringify(results[1]),
            
        });
    })
};

module.exports.ranking = function(req, res) 
{
    res.render('ranking.jade', {});
};

