import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { graphqlHTTP } from 'express-graphql';
import { NoSchemaIntrospectionCustomRule } from 'graphql';
import { RequestBody, ResponseBody } from './definitions/custom';
import gqlSchema from './graphql/schema/gqlSchema';
import gqlResolvers from './graphql/resolvers/resolvers';
import checkAuth from './middlewares/checkAuth';
import setReqMetadata from './middlewares/setReqMetadata';
import setTestingData from './middlewares/setTestingData';
import { connectToDatabase } from './utils/database.utils';
import 'dotenv/config';
import setOriginalReqMethod from './middlewares/setOriginalReqMethod';

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_TEST = process.env.NODE_ENV === 'test';
const IS_OFFLINE = IS_DEV || IS_TEST;
const IS_ONLINE = !IS_OFFLINE;

const app = express();

if (IS_ONLINE) app.use(helmet());

app.use(bodyParser.json());

// eslint-disable-next-line consistent-return
app.use((req: RequestBody, res: ResponseBody<any>, next: any) => {
  // CORS is taken care of in AWS Lambda
  if (IS_OFFLINE) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
  }

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

if (IS_ONLINE) {
  app.use(setOriginalReqMethod); // FIXME: hotfix
  app.use(checkAuth);
  app.use(setReqMetadata);
} else {
  app.use(setTestingData);
}

app.use(
  '/',
  graphqlHTTP(async () => ({
    schema: gqlSchema,
    rootValue: gqlResolvers,
    validationRules: IS_ONLINE ? [NoSchemaIntrospectionCustomRule] : [],
    graphiql: IS_OFFLINE,
  }))
);

if (process.env.NODE_ENV === 'development') {
  connectToDatabase()
    .then(() => {
      app.listen(process.env.PORT, () =>
        // eslint-disable-next-line no-console
        console.log(`Listening on port ${process.env.PORT}...`)
      );
    })
    // eslint-disable-next-line no-console
    .catch((e) => console.error(e));
}

export default app;
