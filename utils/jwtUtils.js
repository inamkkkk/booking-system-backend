const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const verifyToken = (token, callback) => {
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    callback(err, user);
  });
};

module.exports = {
  generateToken,
  verifyToken,
};