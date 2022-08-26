const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const {
  DB_URL,
  DB_NAME,
} = process.env;

const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;
const connection = new MongoClient(DB_URL, dbConfig);

module.exports = async () => {
  try {
    if (!db) {
      await connection.connect();
      db = connection.db(DB_NAME);
    }
  } catch (error) {
    process.exit(1);
  }

  return db;
};
