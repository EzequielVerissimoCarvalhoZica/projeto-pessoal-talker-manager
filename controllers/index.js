const listTalkers = require('./listTalkers');
const listTalkerById = require('./listTalkerById');
const token = require('./token');
const createTalker = require('./createTalker');
const editTalker = require('./editTalker');
const deleteTalker = require('./deleteTalker');
const searchTalker = require('./searchTalker');
const errorMiddle = require('./errorMiddle');

module.exports = {
  listTalkers,
  listTalkerById,
  token,
  createTalker,
  editTalker,
  deleteTalker,
  searchTalker,
  errorMiddle,
};