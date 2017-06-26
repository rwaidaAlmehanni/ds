var mongoose= require ("mongoose"); 

var UserSchema = new mongoose.Schema({
	
	username:{
		type     : String, 
		required : true,
		unique   : true
	}, 
	password:{
		type     : String, 
		required : true
	},
	email:{
		type     : String,
		required : true
	},
	test:[
	       {title:String ,
	        start_date:	{type: Date,
		                 default: Date.now 
		                }, 
		    status : String , 
		    assigned: String 
		  }
	]

}); 


var User= mongoose.model('User', UserSchema);
module.exports= User; 