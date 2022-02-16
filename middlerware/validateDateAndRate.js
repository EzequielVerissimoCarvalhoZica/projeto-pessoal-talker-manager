const validateDateAndRate = (req, res, next) => {
  try {
    const { talk } = req.body;
    if (!talk || !talk.watchedAt) {
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
    const { talk } = req.body;
    const validateDate = /([0-9]{2})\/([0-9]{2})\/([0-9]{4})/;

    if (!validateDate.test(talk.watchedAt)) {
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
    const { talk } = req.body;
    if (talk.rate < 1 || talk.rate > 5) {
      return res.status(400).json({
        message: 'O campo "rate" deve ser um inteiro de 1 à 5',
      });
    }
    if (!talk.rate) {
      return res.status(400).json({
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
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