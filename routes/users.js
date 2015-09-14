var User = require('../proxy/User');
var validator = require('validator');
var tools = require('../common/tools')

exports.login = function(req, res, next) {
	var loginname = validator.trim(req.body.loginname).toLowerCase();
	//验证信息
	if ([loginname].some(function(item) {
		return item === '';
	})) {
		res.json({code:'9',msg:'信息不完整'});
	}
	User.findByName(loginname,function(err,doc){
		if(err){
			return next(err);
		}
		res.json(doc);
	})
}

exports.register = function(req, res, next) {
	var obj = req.body;
	var loginname = validator.trim(obj.loginname).toLowerCase();
	var email = validator.trim(obj.email).toLowerCase();
	var pwd = validator.trim(obj.pwd);
	var rePwd = validator.trim(obj.rePwd);
	//验证信息
	if ([loginname, pwd, rePwd,email].some(function(item) {
		return item === '';
	})) {
		res.json({code:'9',msg:'信息不完整'});
	}
	if (loginname.length < 5) {
		res.json({code:'10',msg:'用户名至少需要5个字符'});
	}
	if (!tools.validateId(loginname)) {
		res.json({code:'10',msg:'用户名不合法'});
	}
	if (!validator.isEmail(email)) {
		res.json({code:'10',msg:'邮箱不合法'});
	}
	if (pwd !== rePwd) {
		res.json({code:'10',msg:'两次密码输入不一致'});
	}
	
	User.newAndSave(obj,function(err){
		if(err){
			return next(err);
		}
		res.send('success');
	})
}