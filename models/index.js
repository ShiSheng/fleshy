var mg = require('mongoose');
var config = require('../config')

mg.connect(config.db,{
	server:{poolSize:20}
},function(err){
	if(err){
		console.error('connect to %s error:'+config.db,err.message);
		process.exit(1);
	}
});


//models
require('./user');

exports.User = mg.model('User');
