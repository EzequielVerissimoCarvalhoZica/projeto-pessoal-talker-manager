const crypto = require('crypto');

module.exports = (req, res, next) => {
  const token = crypto.randomBytes(8).toString('hex');
  try {
    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};