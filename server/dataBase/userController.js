var User = require ('./userModel');
var jwt = require('jwt-simple');

module.exports = {
	
	signup : function (req, res, next) {

		User.findOne({username : req.body.username})
 			.exec(function (error, user) {
 	
	 			if(user){

	 				next(new Error('User already exist!'));

	 			}else{

					var newUser = new User ({

						username : req.body.username,
			        	password : req.body.password,
			        	email : req.body.email

					});//end of the object

					newUser.save(function(err, newUser){

			    		if(err){

			       		 	res.status(500).send(err);

			    		}else{

			    			res.json(newUser)
			    		};//end of else
					});//end of save
				}//end of else
			});//end of exec
	},//end of signup function
		
	login: function (req, res, next) {

		const username = req.body.username;
		const password = req.body.password;

		User.find({username: req.body.username})
		.then(function (user) {

			if (!user) {

				new Error('User not Found!');

			}else{

				if (user[0].password === req.body.password) {

					var token = jwt.encode(user[0], 'secret');
		            res.setHeader('x-access-token',token);
		            res.json({token: token, userId : user[0]._id, username:user[0].username});
				
				}else{

					res.json(user);

				}//end of else
			}//end of else
		});//end of then
	},//end of login function

	getAll : function (req, res) {

		User.find({}).exec(function (err, allUser) {

			if(err){

				res.status(500).send('err');

			}else{

				res.json(allUser);
			}//end of else
		});//end of exec
	},//end of getAll function

    addTest :function(req ,res,next){

       const flag=true;

	   User.find({username: req.body.username})
		.then(function (user) {

			if (!user) {

				new Error('User not Found!');

			}else{

        	    for( var i=0 ; i < user[0].test.length ; i++ ){

    	    	    if( user[0].test[i]["title"] === req.body.title ){

    			        flag = false;
    			        break;
    		        }//end if
    	        }//end for

    	       if( flag ){

    		    user[0].test.push({ title:req.body.title ,status:req.body.status, assigned:req.body.assigned });
                
                user[0].save( function( err, user ){

                    if(err){

                        res.status(500).send('not save');

                    }else{

                        res.json(user);
                    }//end of else
                });//end of save

               }else{

        	    next(new Error('Title is already exist')); 
                }//end of else
            }//end of else
       })//end of then
    }//end of addTest function
}//end of the module