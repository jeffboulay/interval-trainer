var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
  name: String,
  intervalCount: {type: Number, default: 0},
  totalTime: {type: Number, default: 0},
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }]
});

mongoose.model('Session', SessionSchema);
