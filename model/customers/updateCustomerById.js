const { ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const getDBConnection = require('../dbConnection');

dotenv.config();
const { DB_CUSTOMERS_COLLECTION } = process.env;

module.exports = async (id, newValues) => {
  const db = await getDBConnection();

  const updatedCustomer = await db.collection(DB_CUSTOMERS_COLLECTION).update(
    {
      _id: ObjectId(id),
    },
    {
      $set: newValues,
    },
  );

  return updatedCustomer;
};
