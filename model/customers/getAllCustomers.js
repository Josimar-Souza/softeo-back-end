const dotenv = require('dotenv');
const getDBConnection = require('../dbConnection');

dotenv.config();

const { DB_CUSTOMERS_COLLECTION } = process.env;

module.exports = async () => {
  const db = await getDBConnection();

  const customers = await db.collection(DB_CUSTOMERS_COLLECTION).find({}).toArray();

  return customers;
};
