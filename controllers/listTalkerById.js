const fs = require('fs').promises;

const FILE_TALKERS_PATH = './talker.json';

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talkers = await fs.readFile(FILE_TALKERS_PATH, 'utf-8');
    const parsedTalkers = JSON.parse(talkers);

    const talker = parsedTalkers.find((t) => t.id === Number(id));

    if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

    return res.status(200).json(talker);
  } catch (error) {
    return next(error);
  }
};
