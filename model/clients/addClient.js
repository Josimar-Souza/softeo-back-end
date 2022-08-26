const dotenv = require('dotenv');
const { ObjectId } = require('mongodb');
const getDBConnection = require('../dbConnection');

dotenv.config();

const { DB_CLIENTS_COLLECTION } = process.env;

module.exports = async (newClient) => {
  const db = await getDBConnection();

  const { insertedId: { id } } = await db.collection(DB_CLIENTS_COLLECTION).insertOne(newClient);

  const clientInserted = {
    ...newClient,
    _id: ObjectId(id),
  };

  return clientInserted;
};
