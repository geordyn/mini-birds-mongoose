var mongoose = require('mongoose');

//schema object - Schema is a function. Schema is providing structure for data you're going
//to save in the database.
var sightingSchema = new mongoose.Schema({
  name: { type: String, lowercase: true },
  order: { type: String, maxlength: 20 },
  status: {
    type: String,
    lowercase: true,
    enum: [
      'extinct',
      'extinct in the wild',
      'critically endangered',
      'endangered',
      'vulnerable',
      'near threatened',
      'conservation dependent',
      'least concern'
    ]
  },
  numberSeen: {type: Number, min: 1},
  confirmed: {type: Boolean, default: false},
  updatedAt: {type: Date, default: Date.now}
});
//make a model with this schema. push this model out
module.exports = mongoose.model('Sighting', sightingSchema);
//give collection name first, then pass schema name
