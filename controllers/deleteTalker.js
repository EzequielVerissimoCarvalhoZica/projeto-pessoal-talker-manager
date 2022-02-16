const fs = require('fs').promises;

const FILE_TALKERS_PATH = './talker.json';

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idNumber = Number(id);
    const talkersList = JSON.parse(await fs.readFile(FILE_TALKERS_PATH, 'utf-8'));
    const talkerIndex = talkersList.findIndex((talker) => talker.id === idNumber);
    talkersList.splice(talkerIndex, 1);
    await fs.writeFile(FILE_TALKERS_PATH, JSON.stringify(talkersList));

    res.status(204).end();
  } catch (error) {
    return next(error);
  }
};