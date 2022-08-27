const { StatusCodes } = require('http-status-codes');
const customersService = require('../../service/customers');
const CustomError = require('../../helpers/customError');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedResult = await customersService.deleteCustomerByid(id);

    if (deletedResult instanceof CustomError) {
      return res.status(deletedResult.statusCode).json({ message: deletedResult.message });
    }

    return res.status(StatusCodes.OK).json({ message: 'Customer successfully deleted!' });
  } catch (error) {
    next(error);
  }
};
