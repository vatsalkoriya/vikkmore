import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

const globalForMongo = globalThis as typeof globalThis & {
  __vikkmoreMongoClientPromise__?: Promise<MongoClient>;
};

const client = new MongoClient(uri);

export const mongoClientPromise =
  globalForMongo.__vikkmoreMongoClientPromise__ || client.connect();

if (!globalForMongo.__vikkmoreMongoClientPromise__) {
  globalForMongo.__vikkmoreMongoClientPromise__ = mongoClientPromise;
}

export const getUserLibraryCollection = async () => {
  const connectedClient = await mongoClientPromise;
  const dbName = process.env.MONGODB_DB_NAME || "vikkmore";
  const collectionName = process.env.MONGODB_COLLECTION_NAME || "userLibraries";
  return connectedClient.db(dbName).collection(collectionName);
};
