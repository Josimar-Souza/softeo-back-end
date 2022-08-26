const { StatusCodes } = require('http-status-codes');
const CustomError = require('../../helpers/customError');
const clientsService = require('../../service/clients');

module.exports = async (req, res, next) => {
  let insertedClient;

  try {
    insertedClient = await clientsService.addClient(req.body);

    if (insertedClient instanceof CustomError) {
      return res.status(insertedClient.statusCode).json({ message: insertedClient.message });
    }
  } catch (error) {
    next(error);
  }

  return res.status(StatusCodes.CREATED).json({ insertedClient });
};
