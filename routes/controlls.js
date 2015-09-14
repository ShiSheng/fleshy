var express = require('express');
var router = express.Router();


var users = require('./users');


/* GET home page. */
router.get('/', function(req, res, next) {
//res.render('index', { title: 'Express' });
res.sendfile('views/index.html')
});



//登录

router.get('/users/login', function(req, res, next) {
	//res.render('index', { title: 'Express' });
	res.sendfile('views/html/login.html')
});

router.post('/users/login',users.login);

//注册
router.get('/users/register', function(req, res, next) {
	//res.render('index', { title: 'Express' });
	res.sendfile('views/html/register.html')
});

router.post('/users/register',users.register);

//用户路由
//router.use('/register',users);
//文章路由
//router.use('/article',article);

module.exports = router;
