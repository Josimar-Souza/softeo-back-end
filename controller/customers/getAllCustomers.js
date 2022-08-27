const { StatusCodes } = require('http-status-codes');
const customersService = require('../../service/customers');

module.exports = async (req, res, next) => {
  try {
    const customers = await customersService.getAllCustomers();

    return res.status(StatusCodes.OK).json({ customers });
  } catch (error) {
    next(error);
  }
};
