const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');
const getCustomerById = require('./getCustomerById');
const deleteCustomerById = require('./deleteCustomerById');
const updateCustomerById = require('./updateCustomerById');

const customersModel = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  deleteCustomerById,
  updateCustomerById,
};

module.exports = customersModel;
