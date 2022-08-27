const { StatusCodes } = require('http-status-codes');
const customerModel = require('../../model/customers');
const customerValidations = require('../../validations/customers');
const CustomError = require('../../helpers/customError');

const dateStringFormatter = (dateString) => {
  const dateSplited = dateString.split('-');

  const formattedDate = `${dateSplited[2]}-${dateSplited[1]}-${dateSplited[0]}T00:00:00`;

  return new Date(formattedDate);
};

const updateInstallmentsDate = (newCustomer) => {
  const installments = newCustomer.installments.map((installment) => {
    const formattedDate = dateStringFormatter(installment.date);
    return {
      date: formattedDate,
      value: installment.value,
    };
  });

  return installments;
};

module.exports = async (newCustomer) => {
  const validationResult = customerValidations.addCustomerValidation(newCustomer);

  if ('error' in validationResult) {
    return new CustomError(validationResult.error.message, StatusCodes.BAD_REQUEST);
  }

  const customerToInsert = {
    ...newCustomer,
    installments: updateInstallmentsDate(newCustomer),
  };

  const insertedCustomer = await customerModel.addCustomer(customerToInsert);

  return insertedCustomer;
};
