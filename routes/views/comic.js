var keystone = require('keystone');
exports = module.exports = function(req,res) {
    var view = new keystone.View(req, res);
    var locals= res.locals;

    locals.section = 'comics';

    locals.filters = {
        num: req.params.num
    };
    locals.data = {
        comics: []
    }

    view.on('init', function(next){

        var q = keystone.list('Comic').model.findOne({
            comic_num: locals.filters.num
        }); 

        q.exec(function(err, result){

            locals.data.comic = result;

            if(err){
                //crap
            }
            else{
                var q2 = keystone.list('Comic').model.findOne().sort('-comic_num')

                q2.exec(function(err, result){
                    locals.data.max_comic_num = result.comic_num;
                    console.log(result.comic_num);
                    next(err);
                });
            }
        });


        

    });

    view.render('comic');
}

