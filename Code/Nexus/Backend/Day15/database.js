

const { MongoClient } = require('mongodb');
// or as an es module :
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://CoderPrithwi:Prithwi%40123@codingprithwi.suswp5x.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'CoderPri';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...
  // const findResult = await collection.find({});
  // // const findResult = await collection.find({}).toArray();

  // for(let doc of findResult){
  //   console.log(doc);
  //   balance++;
  // }
  // console.log('Found documents =>', name);


  const insertResult = await collection.insertOne({"name": "Rashi", "age": 22, "city": "Motihari"});
  console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());