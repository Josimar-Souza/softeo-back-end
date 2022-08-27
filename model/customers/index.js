const addCustomer = require('./addCustomer');
const getAllCustomers = require('./getAllCustomers');

const customersModel = {
  addCustomer,
  getAllCustomers,
};

module.exports = customersModel;
