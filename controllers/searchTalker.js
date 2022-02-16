const fs = require('fs').promises;

const FILE_TALKERS_PATH = './talker.json';

module.exports = async (req, res, next) => {
  try {
    const { q } = req.query;
    const talkersList = JSON.parse(await fs.readFile(FILE_TALKERS_PATH, 'utf-8'));

    if (!q) return res.status(200).json(talkersList);
  
    const filteredTalkers = talkersList
    .filter((t) => (t.name.toLowerCase()).includes(q.toLowerCase()));

    if (!filteredTalkers) return res.status(200).send([]);

    return res.status(200).json(filteredTalkers);
  } catch (error) {
    return next(error);
  }
};