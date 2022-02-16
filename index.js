const express = require('express');
const bodyParser = require('body-parser');
const {
  listTalkers,
  listTalkerById,
  token,
  createTalker,
  editTalker,
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

app.get('/talker', listTalkers);

app.post('/talker', validateTalk, createTalker);

app.get('/talker/search');

app.get('/talker/:id', listTalkerById);

app.put('/talker/:id', validateTalk, editTalker);

app.delete('/talker/:id');

app.post('/login', validateLogin, token);

app.listen(PORT, () => {
  console.log('Online');
});
