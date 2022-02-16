const fs = require('fs').promises;

const FILE_TALKERS_PATH = './talker.json';

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const idNumber = Number(id);
    const talkersList = JSON.parse(await fs.readFile(FILE_TALKERS_PATH, 'utf-8'));
    const talkerIndex = talkersList.findIndex((talker) => talker.id === idNumber);
    const newTalker = { id: idNumber, name, age, talk };

    talkersList.splice(talkerIndex, 1, newTalker);
    await fs.writeFile(FILE_TALKERS_PATH, JSON.stringify(talkersList));
    res.status(200).json(newTalker);
  } catch (error) {
    return next(error);
  }
};
