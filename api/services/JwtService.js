var jwt = require('jsonwebtoken');  
var jwtSecret = sails.config.secrets.jwtSecret;

module.exports = {  
  issue:  (payload)=> {
    token = jwt.sign(payload, jwtSecret, {expiresIn: '168h'})
    return token
  },

  verify:  (token, callback) =>{
    return jwt.verify(token, jwtSecret, callback);
  }


  
}