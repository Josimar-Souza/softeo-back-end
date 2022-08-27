const { Router } = require('express');
const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');
const getCustomerById = require('./getCustomerById');

const customerRouter = Router({ mergeParams: true });

customerRouter.get('/', getAllCustomers);
customerRouter.get('/:id', getCustomerById);
customerRouter.post('/', addCustomer);

module.exports = (rootRouter) => {
  rootRouter.use('/customers', customerRouter);
};
