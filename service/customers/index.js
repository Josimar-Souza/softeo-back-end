const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');

const customersService = {
  addCustomer,
  getAllCustomers,
};

module.exports = customersService;
