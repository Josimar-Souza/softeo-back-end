const { StatusCodes } = require('http-status-codes');
const customersModel = require('../../model/customers');
const CustomError = require('../../helpers/customError');

module.exports = async (id) => {
  const customer = await customersModel.getCustomerById(id);

  if (!customer) {
    return new CustomError('Customer not found!', StatusCodes.NOT_FOUND);
  }

  const deletedResult = await customersModel.deleteCustomerById(id);

  return deletedResult;
};
