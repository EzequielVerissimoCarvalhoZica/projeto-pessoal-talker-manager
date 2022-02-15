const fs = require('fs').promises;

const FILE_TALKERS_PATH = './talker.json';

module.exports = async (_req, res, next) => {
  try {
    const talkers = await fs.readFile(FILE_TALKERS_PATH, 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
  
    if (parsedTalkers.length < 1) return res.status(200).send([]);
  
    return res.status(200).json(parsedTalkers);
  } catch (error) {
    return next(error);
  }
};
