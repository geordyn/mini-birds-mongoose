var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
/////////files below//////////
var sightingCtrl = require('./controllers/sightingCtrl');
/////////////////////////////
var app = express();
var port = 1000;
////////////////////////////
app.use(bodyParser.json());
app.use(cors());

var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';
mongoose.connect(mongoUri); //default port number to connect to mongoose
//second part says once you open connection one time, it'll consolelog
//you can put url in 'open' area
mongoose.connection.once('open', function(){
  console.log('successfully connected to mongodb');
});



/////////////////functions//////////////////////
app.post('/api/sighting', sightingCtrl.create);
app.get('/api/sighting', sightingCtrl.read);
app.put('/api/sighting', sightingCtrl.update);
app.delete('/api/sighting', sightingCtrl.remove);



app.listen(port, function(){
  console.log('now listening at port ' + port);
});


// find
// findOne
// update
// findByIdAndUpdate
// create
// modify
// findAndModify
// save
// findByIdAndRemove
