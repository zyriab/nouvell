// import { connectToDatabase } from '../../utils/database.utils';
// import { sendSubscriptionConfirmationEmail } from '../../utils/email.utils';
// import 'dotenv/config';

// // TODO: this was written to do a quick test -> implement actual tests ;)

// let dbConn: any;

// beforeAll(async () => {
//   dbConn = await connectToDatabase();
// });

// afterAll((done) => {
//   dbConn.connection.close();
//   done();
// });

// test('Should have sent email', async () => {
//   await connectToDatabase();
//   await sendSubscriptionConfirmationEmail({
//     email: 'wallendorff.arthur@gmail.com',
//     language: 'en',
//     occupation: 'Pro',
//     products: [{ name: 'ShopiCSV', category: 'Shopify' }],
//   });
// });
