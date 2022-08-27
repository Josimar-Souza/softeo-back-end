const { Router } = require('express');
const addCustomer = require('./addCustomer');

const customerRouter = Router({ mergeParams: true });

customerRouter.post('/', addCustomer);

module.exports = (rootRouter) => {
  rootRouter.use('/customers', customerRouter);
};
