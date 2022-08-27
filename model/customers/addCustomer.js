const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');
const getDBConnection = require('../dbConnection');

dotenv.config();

const { DB_CUSTOMERS_COLLECTION } = process.env;

module.exports = async (newCustomer) => {
  const db = await getDBConnection();

  const { insertedId: { id } } = await db.collection(DB_CUSTOMERS_COLLECTION)
    .insertOne(newCustomer);

  const insertedCustomer = {
    ...newCustomer,
    _id: ObjectId(id),
  };

  return insertedCustomer;
};
