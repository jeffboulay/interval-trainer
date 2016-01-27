var express = require('express');
var mongoose = require('mongoose');

require('../models/Sessions');

var Session = mongoose.model('Session');
var router = express.Router();

//return all sessions
router.get('/sessions', function(req, res, next) {
  Session.find(function(err, sessions){
    if(err){ return next(err); }

    res.json(sessions);
  });
});

//create a session
router.post('/session', function(req, res, next) {
  //var session = new Session(req.body);
  var mySession = {
    "name": "Back & Biceps",
    "intervalCount": 13,
    "totalTime": 30,
    "activities": [
      {
        "name": "push-ups",
        "order":1,
        "timer": 10000,
        "rest": 8000
      },
      {
        "name": "sit-ups",
        "order":2,
        "timer": 20000,
        "rest": 8000
      },
      {
        "name": "bicep curls",
        "order":3,
        "timer": 12000,
        "rest": 8000
      }
    ]
  };

  var session = new Session(mySession);
  session.save(function(err, session){
    if(err){
      return next(err);
    }

    res.json(session);
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
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;