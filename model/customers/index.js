const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');
const getCustomerById = require('./getCustomerById');
const deleteCustomerById = require('./deleteCustomerById');

const customersModel = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  deleteCustomerById,
};

module.exports = customersModel;
