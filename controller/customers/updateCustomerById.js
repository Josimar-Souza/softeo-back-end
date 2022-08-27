const { StatusCodes } = require('http-status-codes');
const customersService = require('../../service/customers');
const CustomError = require('../../helpers/customError');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedCustomer = await customersService.updateCustomerById(id, req.body);

    if (updatedCustomer instanceof CustomError) {
      return res.status(updatedCustomer.statusCode).json({ message: updatedCustomer.message });
    }

    return res.status(StatusCodes.OK).json({ updatedCustomer });
  } catch (error) {
    next(error);
  }
};
