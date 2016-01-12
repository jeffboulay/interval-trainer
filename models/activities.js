var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
  name: String,
  timer: {type: Number, default: 0},
  rest: {type: Number, default: 0},
  session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' }
});

mongoose.model('Activity', ActivitySchema);
