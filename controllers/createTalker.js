const fs = require('fs').promises;

const FILE_TALKERS_PATH = './talker.json';

module.exports = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;

    const talkersList = JSON.parse(await fs.readFile(FILE_TALKERS_PATH, 'utf-8'));

    const newTalker = {
      id: Number(talkersList[talkersList.length - 1].id) + 1,
      name,
      age,
      talk,
    };
    const newTalkersList = [...talkersList, newTalker];
    const stringifiedNewTalkersList = JSON.stringify(newTalkersList);
    await fs.writeFile(FILE_TALKERS_PATH, stringifiedNewTalkersList);
    return res.status(201).json(newTalker);
  } catch (error) {
    return next(error);
  }
};