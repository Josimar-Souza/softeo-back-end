const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');
const getCustomerById = require('./getCustomerById');

const customersModel = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
};

module.exports = customersModel;
