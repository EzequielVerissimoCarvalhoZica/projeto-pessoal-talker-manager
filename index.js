const express = require('express');
const bodyParser = require('body-parser');
const {
  listTalkers,
  listTalkerById,
  token,
  createTalker,
  editTalker,
  deleteTalker,
  searchTalker,
  errorMiddle,
} = require('./controllers');

const {
  validateEmail,
  validatePassword,
  validateDateAndRate,
  validateWatchedAt,
  validateRate,
  validateAge,
  validateName,
  validateToken,
} = require('./middlerware');

const validateLogin = [validateEmail, validatePassword];
const validateTalk = [
  validateToken,
  validateAge,
  validateName,
  validateDateAndRate,
  validateWatchedAt,
  validateRate,
];

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send('');
});

app
  .route('/talker')
  .get(listTalkers)
  .post(validateTalk, createTalker);

app.post('/login', validateLogin, token);

app.get('/talker/search', validateToken, searchTalker);

app
  .route('/talker/:id')
  .get(listTalkerById)
  .put(validateTalk, editTalker)
  .delete(validateToken, deleteTalker);

app.use(errorMiddle);

app.listen(PORT, () => {
  console.log('Online');
});
