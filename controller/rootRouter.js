const { Router } = require('express');
const customerRouter = require('./customers/customerRouter');

const rootRouter = Router({ mergeParams: true });

customerRouter(rootRouter);

module.exports = (app) => {
  app.use(rootRouter);
};
