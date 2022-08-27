const { StatusCodes } = require('http-status-codes');
const customersModel = require('../../model/customers');
const customersValidations = require('../../validations/customers');
const CustomError = require('../../helpers/customError');

module.exports = async (id, newValues) => {
  const customer = await customersModel.getCustomerById(id);

  if (!customer) {
    return new CustomError('Customer not found!', StatusCodes.NOT_FOUND);
  }

  const validationResult = customersValidations.updateCustomerValidation(newValues);

  if ('error' in validationResult) {
    return new CustomError(validationResult.error.message, StatusCodes.BAD_REQUEST);
  }

  const updatedCustomer = await customersModel.updateCustomerById(id, newValues);

  return updatedCustomer;
};
