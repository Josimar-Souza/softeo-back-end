const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');
const getCustomerById = require('./getCustomerById');

const customersService = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
};

module.exports = customersService;
