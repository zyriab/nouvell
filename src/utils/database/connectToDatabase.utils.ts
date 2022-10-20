/* eslint-disable no-console */
import mongoose from 'mongoose';

let cachedConnection: typeof mongoose | null = null;

/**
 * Used in order to not re-open a new connection on every function invocation.
 * Returns a Mongoose `Connection` object
 */
export default async function connectToDatabase() {
  console.log('Connecting to database...');

  if (cachedConnection == null) {
    cachedConnection = await mongoose.connect(process.env.MONGODB_URI!, {
      serverSelectionTimeoutMS: 5000,
    });

    await cachedConnection;
  }

  return cachedConnection;
}
