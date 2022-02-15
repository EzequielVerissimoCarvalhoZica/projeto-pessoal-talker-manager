const validateDateAndRate = (req, res, next) => {
  try {
    const { talk } = req.body;
    if (!talk || !talk.watchedAt || !talk.rate) {
      return res.status(400).json({
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

const validateWatchedAt = (req, res, next) => {
  try {
    const { talk: { watchedAt } } = req.body;
    const validateDate = /([0-9]{2})\/([0-9]{2})\/([0-9]{4})/;

    if (!validateDate.test(watchedAt)) {
      return res.status(400).json({
        message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

const validateRate = (req, res, next) => {
  try {
    const { talk: { rate } } = req.body;

    if (rate < 1 || rate > 5) {
      return res.status(400).json({
        message: 'O campo "rate" deve ser um inteiro de 1 à 5',
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  validateDateAndRate,
  validateWatchedAt,
  validateRate,
};