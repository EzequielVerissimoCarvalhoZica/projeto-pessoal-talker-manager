const fs = require('fs').promises;

const FILE_TALKERS_PATH = './talker.json';

module.exports = async (_req, res) => {
  return res.status(200).json();
};
