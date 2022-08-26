const { Router } = require('express');
const addClient = require('./addClient');

const clientsRouter = Router({ mergeParams: true });

clientsRouter.post('/', addClient);

module.exports = (rootRouter) => {
  rootRouter.use('/clients', clientsRouter);
};
