/* eslint-disable import/no-import-module-exports */
import awsServerlessExpress from 'aws-serverless-express';
import { connectToDatabase } from './utils/database.utils';
import app from './app';
import reqCache from './utils/fixes/reqCache.utils';
import 'dotenv/config';

require('source-map-support').install();

const server = awsServerlessExpress.createServer(app);

exports.handler = async (event: any, context: any) => {
  context.callbackWaitsForEmptyEventLoop = false;

  reqCache.method = event.requestContext.http.method;

  await connectToDatabase();
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
