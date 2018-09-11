'use strict';
const logbookModel = require('../logbookModel.js');
var fs = require('fs');

module.exports.insert = function(req,res){
	var obj = {};
	obj['Boat'] = req.body.boat;
	obj['Crew'] = req.body.crew;
	obj['Destination'] = req.body.destination;
	obj['Departure'] = formatDate(new Date(req.body.startDate));
	obj['code'] = Math.floor(1000 + Math.random() * 9000);
	var logbookentry = new logbookModel(obj);
	logbookentry.save(function (err, thor) {
      if (err) return console.error(err);
    	res.send({'_id':thor._id,'code':thor.code});
  });
	//res.send({});

}

module.exports.log_out = function (req,res) {
	if(req.session.admin) req.session.destroy();
  res.send('logout');
}

module.exports.list = function(req,res) {
	logbookModel.find().sort('Departure: desc').exec(function (err, data) {
		if (err) return console.error(err);
			res.send(data);
	});
}

module.exports.endtrip = function(req,res) {
	logbookModel.findById(req.body.id,function(err,log){
		if(err){ return{'err':true}; }
		if(log.code && log.code == req.body.code){
			log.Arrival = formatDate(new Date());
			log.save();
			res.send({'err':false});
		}else{
			res.send({'err':true,'msg':'Invalid Code'});
		}

	})

}

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}
