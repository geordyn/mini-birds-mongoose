var sightingModel = require('./../models/sightingModel');

module.exports = {
  create: function(req, res) {
    var newSighting = new sightingModel(req.body);
    //collection in database called sighting
    newSighting.save(function(err, result) { //saves itself
      if (err) {
        return res.status(500).send(err);
      } else {
        console.log('create');
        res.send(result);
      }
    });
  },

  read: function(req, res) {
    sightingModel.find(req.query)
      .exec()
      .then(function(err, result) {
        if (err) {
          res.status(500).send(err);
        }
        else {
          res.send(result);
        }
      });
  },

  update: function(req, res) {
    sightingModel.findByIdAndUpdate(req.query.id, {$set: req.body}, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      }
      else {
        console.log('successfully updated');
        res.send(result);
      }
    });
  },

  remove: function(req, res) {
    sightingModel.findByIdAndRemove(req.query.id, function(err, result) {
      if (err) {
        return res.status(500).send(err);
      }
      else {
        console.log('successfully deleted');
      res.send(result);
    }
    });
  }

};
