var keystone = require('keystone');

exports = module.exports = function(req,res) {
    var view = new keystone.View(req, res);
    var locals= res.locals;

    locals.section = 'comics';

    view.query('comics', keystone.list('Comic').model.find());

    view.render('comics');
}

