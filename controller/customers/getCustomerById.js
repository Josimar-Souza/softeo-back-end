const { StatusCodes } = require('http-status-codes');
const customersService = require('../../service/customers');
const CustomError = require('../../helpers/customError');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const customer = await customersService.getCustomerById(id);

    if (customer instanceof CustomError) {
      return res.status(customer.statusCode).json({ message: customer.message });
    }

    return res.status(StatusCodes.OK).json({ customer });
  } catch (error) {
    next(error);
  }
};
