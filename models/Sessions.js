var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
  name: String,
  order:Number,
  timer: {type: Number, default: 0},
  rest: {type: Number, default: 0},
});

var SessionSchema = new mongoose.Schema({
  name: String,
  intervalCount: {type: Number, default: 0},
  totalTime: {type: Number, default: 0},
  activities: [ActivitySchema]
});

mongoose.model('Session', SessionSchema);
