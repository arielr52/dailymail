
/*
 * GET home page.
 */

var kids = [];

kids.push({ name: 'bob', email: 'bob@email' });
kids.push({ name: 'anna', email: 'anna@email' });


exports.index = function(req, res){
  res.render('index', { title: 'Express',kids: kids });
};