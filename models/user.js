var mg = require('mongoose');
var BaseModel = require('./base_model');
var Schema = mg.Schema;

var UserSchema = new Schema({
	name: {
		type: String
	},
	loginname: {
		type: String
	},
	pwd: {
		type: String
	},
	email: {
		type: String
	}
});


UserSchema.plugin(BaseModel);

UserSchema.index({loginname:1},{unique:true});
UserSchema.index({email:1},{unique:true});

mg.model('User',UserSchema);


//unkonw
//var renderHelper = require('../common/render_helper');
//var utility   = require('utility');
//var _ = require('lodash');

