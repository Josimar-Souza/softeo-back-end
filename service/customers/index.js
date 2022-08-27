const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');
const getCustomerById = require('./getCustomerById');
const deleteCustomerByid = require('./deleteCustomerById');

const customersService = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  deleteCustomerByid,
};

module.exports = customersService;
