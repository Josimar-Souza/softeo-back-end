const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');
const getDBConnection = require('../dbConnection');

dotenv.config();

const { DB_CUSTOMERS_COLLECTION } = process.env;

module.exports = async (id) => {
  const db = await getDBConnection();

  const customer = await db.collection(DB_CUSTOMERS_COLLECTION).find(
    {
      _id: ObjectId(id),
    },
  ).toArray();

  return customer[0];
};
