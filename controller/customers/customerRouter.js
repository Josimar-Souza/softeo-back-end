const { Router } = require('express');
const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');

const customerRouter = Router({ mergeParams: true });

customerRouter.get('/', getAllCustomers);
customerRouter.post('/', addCustomer);

module.exports = (rootRouter) => {
  rootRouter.use('/customers', customerRouter);
};
