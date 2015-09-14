var models = require('../models');
var User = models.User;

//新增
exports.newAndSave = function(obj,cb){
	var user = new User(obj);
	
//	user.save(cb);
	User.create(user,cb)
}

//根据登陆名查询
exports.findByName = function(loginname,cb){
	User.findOne({loginname:loginname},function(err,doc){
		cb(err,doc);
	})
}
