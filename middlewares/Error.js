/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');

module.exports = (error, req, res, next) => {
  console.log(error);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
};
