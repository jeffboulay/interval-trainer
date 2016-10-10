var express = require('express');
var mongoose = require('mongoose');

require('./Sessions');

var Session = mongoose.model('Session');
var router = express.Router();

//return all sessions
router.get('/sessions', function(req, res, next) {
  Session.find(function(err, sessions){
    if(err){ return next(err); }

    res.json(sessions);
  });
});

//return a session
router.get('/sessions/:id', function(req, res, next) {
  Session.findById(req.params.id, function(err, session) {
    if (err){ return res.send(err);}
    res.json(session);
  });
});


//create a session
router.post('/session', function(req, res, next) {
  //var session = new Session(req.body);
 console.log(req);
  var session = new Session(req.body);
  session.save(function(err, session){
    if(err){
      return next(err);
    }

    res.json(session);
  });
});

//delete a session
router.delete('/sessions/:id', function(req, res, next) {
  Session.remove({
    _id: req.params.id
  }, function(err) {
    if (err){
      return next(err);
    }

    res.json({ message: 'Successfully deleted', session: req.params.id });
  });
});

/*

//return a session
router.param('session', function(req, res, next, id) {
  var query = Session.findById(id);

  query.exec(function (err, session){
    if (err) { return next(err); }
    if (!session) { return next(new Error('can\'t find session')); }

    req.session = session;
    return next();
  });
});

//create a session
router.post('/sessions', function(req, res, next) {
  var session = new Session(req.body);
  //post.author = req.payload.username;
  session.save(function(err, session){
    if(err){ return next(err); }

    res.json(session);
  });
});

//create a activity for a session
router.post('/sessions/:session/activities', function(req, res, next) {
  var activity = new Activity(req.body);
  activity.session = req.session;
  //activity.author = req.payload.username;

  activity.save(function(err, activity){
    if(err){ return next(err); }

    req.session.activities.push(comment);
    req.session.save(function(err, session) {
      if(err){ return next(err); }

      res.json(activity);
    });
  });
});

//get session with activities
router.get('/sessions/:session', function(req, res, next) {
  req.post.populate('activities', function(err, post) {
    if (err) { return next(err); }

    res.json(session);
  });
});

/!* GET home page. *!/
*/
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
