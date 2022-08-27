const { ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const getDBConnection = require('../dbConnection');

dotenv.config();
const { DB_CUSTOMERS_COLLECTION } = process.env;

module.exports = async (id) => {
  const db = await getDBConnection();

  const deletedResult = await db.collection(DB_CUSTOMERS_COLLECTION).deleteOne(
    {
      _id: ObjectId(id),
    },
  );

  return deletedResult;
};
