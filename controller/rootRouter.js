const { Router } = require('express');
const clientsRouter = require('./clients/clientsRouter');

const rootRouter = Router({ mergeParams: true });

clientsRouter(rootRouter);

module.exports = (app) => {
  app.use(rootRouter);
};
