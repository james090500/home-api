const dotenv = require('dotenv').config().parsed
const key = dotenv.API_KEY

module.exports = (req, res, next) => {
    if(req.body.auth_key == key) {
        return next();
    } else {
        return res.status(401).json({success: false, message: 'Auth failed'});
    }
}
