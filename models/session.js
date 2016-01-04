var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
  activity: String,
  timer: {type: Number, default: 0},
  rest: {type: Number, default: 0}
});

mongoose.model('Session', SessionSchema);
