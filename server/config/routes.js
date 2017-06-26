var UserController = require('../DataBase/userController.js');
var utils = require('./utils.js');


module.exports = function (app, express) {//all the routes//
     
	//////////////////////////User///////////////////////////////
		app.post('/api/signup',UserController.signup);
		app.post('/api/login',UserController.login);
		app.get('/api/getAll',UserController.getAll);
		app.post('/api/addtest',UserController.addTest);
			
	}
