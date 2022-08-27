const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');
const getCustomerById = require('./getCustomerById');
const deleteCustomerByid = require('./deleteCustomerById');
const updateCustomerById = require('./updateCustomerById');

const customersService = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  deleteCustomerByid,
  updateCustomerById,
};

module.exports = customersService;
