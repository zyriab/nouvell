/* eslint-disable no-console */
/* eslint-disable import/no-import-module-exports */
import serverlessExpress from '@vendia/serverless-express';
import { connectToDatabase } from './utils/database.utils';
import app from './app';
import reqCache from './utils/fixes/reqCache.utils';
import 'source-map-support/register';
import 'dotenv/config';

let server: any;

async function setup(event: any, context: any) {
  await connectToDatabase();

  server = serverlessExpress({ app });
  return server(event, context);
}

exports.handler = (event: any, context: any) => {
  console.log('Entering handler...');

  context.callbackWaitsForEmptyEventLoop = false;
  reqCache.method = event.requestContext.http.method;

  if (server != null) {
    return server(event, context);
  }

  return setup(event, context);
};
