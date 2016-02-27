var auth = require('./auth'),
  mongoose = require('mongoose'),
  express = require('express'),
  User = mongoose.model('User');

require('../../models/Sessions');

var Session = mongoose.model('Session');
var app = express.Router();

//return all sessions
module.exports = function (app) {

  app.get('/sessions', function(req, res, next) {
    Session.find(function(err, sessions){
      if(err){ return next(err); }

      res.json(sessions);
    });
  });

  //return a session
  app.get('/sessions/:id', function(req, res) {
    Session.findById(req.params.id, function(err, session) {
      if (err){ return res.send(err);}
      res.json(session);
    });
  });


  //create a session
  app.post('/session', function(req, res, next) {
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
  app.delete('/sessions/:id', function(req, res, next) {
    Session.remove({
      _id: req.params.id
    }, function(err) {
      if (err){
        return next(err);
      }

      res.json({ message: 'Successfully deleted', session: req.params.id });
    });
  });

  //user management
  app.get('/api/users', auth.requiresRole('admin'), function(req, res) {
    User.find({}).exec(function(err, collection) {
      res.send(collection);
    })
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  //home route
  app.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });
};
