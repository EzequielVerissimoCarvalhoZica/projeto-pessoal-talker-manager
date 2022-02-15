const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateToken = require('./validateToken');
const {
  validateDateAndRate,
  validateWatchedAt,
  validateRate,
 } = require('./validateDateAndRate');
const validateAge = require('./validateAge');
const validateName = require('./validateName');

module.exports = {
  validateEmail,
  validatePassword,
  validateDateAndRate,
  validateWatchedAt,
  validateRate,
  validateAge,
  validateName,
  validateToken,
};