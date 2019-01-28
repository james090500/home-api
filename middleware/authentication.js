const dotenv = require('dotenv').config().parsed
const key = dotenv.api_key

module.exports = (req, res, next) => {  
  if(req.body.authKey == key) {
    return next();
  } else {
    return res.status(401).json({success: false, message: 'Auth failed'});
  }
}
