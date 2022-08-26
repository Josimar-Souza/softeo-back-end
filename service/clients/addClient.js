const { StatusCodes } = require('http-status-codes');
const clientsModel = require('../../model/clients');
const clientValidations = require('../../validations/clients');
const CustomError = require('../../helpers/customError');

const dateStringFormatter = (dateString) => {
  const dateSplited = dateString.split('-');

  const formattedDate = `${dateSplited[2]}-${dateSplited[1]}-${dateSplited[0]}T00:00:00`;

  return new Date(formattedDate);
};

const updateInstallmentsDate = (newClient) => {
  const installments = newClient.installments.map((installment) => {
    const formattedDate = dateStringFormatter(installment.date);
    return {
      date: formattedDate,
      value: installment.value,
    };
  });

  return installments;
};

module.exports = async (newClient) => {
  const validationResult = clientValidations.addClientValidation(newClient);

  if ('error' in validationResult) {
    return new CustomError(validationResult.error.message, StatusCodes.BAD_REQUEST);
  }

  const clientToInsert = {
    ...newClient,
    installments: updateInstallmentsDate(newClient),
  };

  const clientInserted = await clientsModel.addClient(clientToInsert);

  return clientInserted;
};
