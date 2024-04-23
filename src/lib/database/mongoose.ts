// import mongoose, { ConnectOptions, Mongoose } from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URL;

// interface MongooseConnection {
// 	conn: Mongoose | null;
// 	promise: Promise<Mongoose> | null;
// }

// let cached: MongooseConnection = (global as any).mongoose;

// if (!cached) {
// 	cached = (global as any).mongoose = { conn: null, promise: null };
// }

// export const connectToDatabase = async (): Promise<Mongoose> => {
// 	console.log('Attempting to connect to MongoDB... <<<<<<<<<<<<');
// 	console.log('MONGODB_URL: >>>>>>>>>>>>>>>>', MONGODB_URL);
  
// 	if (cached?.conn) {
// 	  console.log('Using cached connection.');
// 	  return cached.conn;
// 	}
  
// 	if (!MONGODB_URL) {
// 	  throw new Error('MONGODB_URL is not defined');
// 	}
  
// 	const connectionOptions: ConnectOptions = {
// 	  dbName: 'ariobimoportfol',
// 	  bufferCommands: false,
// 	};
  
// 	try {
// 	  cached.promise = mongoose.connect(MONGODB_URL, connectionOptions);
// 	  console.log('MongoDB connected');
// 	  cached.conn = await cached.promise;
// 	  return cached.conn;
// 	} catch (error) {
// 	  console.error('MongoDB connection error:', error);
// 	  throw new Error('Failed to connect to MongoDB');
// 	}
//   };
  

import mongoose, { Mongoose, ConnectOptions } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async (): Promise<Mongoose> => {
  console.log('Attempting to connect to MongoDB...');
  console.log('MONGODB_URL:', MONGODB_URL);

  if (cached?.conn) {
    console.log('Using cached connection.');
    return cached.conn;
  }

  if (!MONGODB_URL) {
    throw new Error('MONGODB_URL is not defined');
  }

  	const connectionOptions: ConnectOptions = {
	  dbName: 'ariobimoportfol',
	  bufferCommands: false,
	};

  try {
    cached.promise = mongoose.connect(MONGODB_URL, connectionOptions);
    console.log('MongoDB connected');
    cached.conn = await cached.promise;
    console.log('Connected to database:', cached.conn.connection.name, '<<<<<<<<<<<<<<<<<<<');
    return cached.conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};
