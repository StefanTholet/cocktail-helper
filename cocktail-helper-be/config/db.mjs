import { MongoClient } from 'mongodb'

let db

export const initDb = async (connectionString) => {
  const client = await MongoClient.connect(connectionString)
  db = client.db('cocktails')
  return db
}

export const getDb = () => {
  if (!db) {
    throw Error('Database not initialized')
  }
  return db
}
