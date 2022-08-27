const { Router } = require('express');
const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');
const getCustomerById = require('./getCustomerById');
const deleteCustomrById = require('./deleteCustomerById');
const updateCustomerById = require('./updateCustomerById');

const customerRouter = Router({ mergeParams: true });

customerRouter.get('/', getAllCustomers);
customerRouter.get('/:id', getCustomerById);
customerRouter.post('/', addCustomer);
customerRouter.delete('/:id', deleteCustomrById);
customerRouter.put('/:id', updateCustomerById);

module.exports = (rootRouter) => {
  rootRouter.use('/customers', customerRouter);
};
