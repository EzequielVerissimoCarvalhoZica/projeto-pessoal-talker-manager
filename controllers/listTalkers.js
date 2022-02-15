const fs = require('fs').promises;

const FILE_TALKERS_PATH = './talker.json';
const listTalkers = [
  {
    name: 'Henrique Albuquerque',
    age: 62,
    id: 1,
    talk: { watchedAt: '23/10/2020', rate: 5 },
  },
  {
    name: 'Heloísa Albuquerque',
    age: 67,
    id: 2,
    talk: { watchedAt: '23/10/2020', rate: 5 },
  },
  {
    name: 'Ricardo Xavier Filho',
    age: 33,
    id: 3,
    talk: { watchedAt: '23/10/2020', rate: 5 },
  },
  {
    name: 'Marcos Costa',
    age: 24,
    id: 4,
    talk: { watchedAt: '23/10/2020', rate: 5 },
  },
];

module.exports = async (_req, res) => {
  const talkers = await fs.readFile(FILE_TALKERS_PATH, 'utf-8');
  const parsedTalkers = JSON.parse(talkers);
  // const stringifiedTalkers = JSON.stringify(listTalkers.sort());
  // console.log(stringifiedTalkers);
  if (parsedTalkers.length < 1) return res.status(200).send([]);

  // await fs.writeFile(FILE_TALKERS_PATH, stringifiedTalkers);

  return res.status(200).json(listTalkers);
};
