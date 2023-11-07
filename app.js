const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'fruitsDB';

async function connectToMongoDB() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log('Connected to the database');
    const db = client.db(dbName);

    // Your database operations go here

    console.log('Database operations completed');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  } finally {
    client.close();
  }
}

connectToMongoDB();
