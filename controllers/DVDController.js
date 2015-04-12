var DVD = require('../models/DVD');

module.exports = {
    dvds: function(req, res){
        console.log(req.query.title);
        DVD.findAll({
        where: {
            title: {
                like: '%' + req.query.title + '%'
            },
            award: req.query.award
        }
        }).then(function(results){
            res.render('dvds', {
                dvds: results,
                input: req.query.title
            });
        })
    }
};