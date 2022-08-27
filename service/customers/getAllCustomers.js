const customersModel = require('../../model/customers');

module.exports = async () => {
  const customers = await customersModel.getAllCustomers();

  return customers;
};
