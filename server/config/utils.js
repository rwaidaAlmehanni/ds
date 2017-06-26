var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');

exports.hashpass = function(pass, cb) {//this function to hasing the password for more secure
  bcrypt.hash(pass, null, null, function(err, hash) {
    if (err) {
      throw new Error(err);
    }
    cb(hash);
  });
};//end of hashpass function

exports.comparePass = function(pass, hash, cb) {//to compare between the hasing password with none hashing pass
  bcrypt.compare(pass, hash, function(err, res) {
    if (err) {
      throw new Error(err);
    }
    cb(res);
  });
};//end of comparepass function

exports.errorLogger = function (error, req, res, next) {//when error of login happen
  console.error(error.stack);
  next(error);
};//end of errorLogger function

exports.errorHandler = function (error, req, res, next) {//check error handler
  res.status(500).send({error: error.message});
};//end of errorHandler function

exports.decode = function (req, res, next) {//create jwt when the user login
  var token = req.headers['x-access-token'];
  var user;
  if (!token) {
    return res.status(403).send(); // send forbidden if a token is not provided
  }
  
  try {
    user = jwt.decode(token, 'secret');
    req.user = user;
    next();
  } catch (error) {
    return next(error);
  }

};//end of decode function