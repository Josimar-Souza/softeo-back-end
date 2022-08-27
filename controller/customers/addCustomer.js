const { StatusCodes } = require('http-status-codes');
const CustomError = require('../../helpers/customError');
const customerService = require('../../service/customers');

module.exports = async (req, res, next) => {
  try {
    const insertedCustomer = await customerService.addCustomer(req.body);

    if (insertedCustomer instanceof CustomError) {
      return res.status(insertedCustomer.statusCode).json({ message: insertedCustomer.message });
    }

    return res.status(StatusCodes.CREATED).json({ insertedCustomer });
  } catch (error) {
    next(error);
  }
};
